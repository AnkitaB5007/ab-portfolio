---
title: "Model Context Protocol: Architecture Explained"
date: 2025-09-14
tags: ["AI", "Anthropic", "JSON-RPC 2.0", "Model Context Protocol", "MCP"]
categories: ["AI"]
summary: "Breaking down the architecture of Model Context Protocol with analogies and examples."
readTime: "7 min read"
---

## Introduction

In the [first part of this series](./model-context-protocol-why), we explored the **“why”** of Model Context Protocol (MCP) — the motivation behind its creation and the problems it solves. In this second part, we dive into the **architecture** of MCP. We will explore how the protocol works under the hood, why its design choices matter, and how they enable scalability, safety, and maintainability.

---

## Host–Client–Server Analogy: A High-Level Flow

At its core, MCP is built on a **Host (client) → Server architecture**. Let’s walk through what happens when a user makes a request to an AI application:

![MCP Architecture Overview](/blog-images/mcp.drawio-1.png)

1. **Host (AI Application)**: The starting point. The user asks, *“Summarize today’s pull requests in GitHub.”* The host is the AI application that needs context to respond.
2. **MCP Client**: Acts as a translator. It converts the host’s request into an **MCP-compatible format**.
3. **MCP Server**: The context provider. It receives the request, frames a **structured MCP server response**, and sends it back.
4. **MCP Client → Host**: The client translates the server’s structured response into a format the host can use, so the AI assistant can finally answer the user.

**Analogy:** Imagine you’re traveling abroad. The *host* is you asking for food at a restaurant, the *client* is your interpreter, and the *server* is the waiter who knows the menu. The interpreter ensures that what you ask is properly conveyed, and what the waiter replies is translated back into a language you understand.

---

## One-to-One Relationship: Why Client ↔ Server is 1:1

MCP enforces a **1:1 relationship between a client and a server**. But why?

* **Decoupling:** Each client only connects to one server, so integrations remain modular. No tangled dependencies.
* **Safety:** By isolating communication, one server cannot interfere with another.
* **Parallelism:** Multiple clients can run in parallel, each talking to its own server without blocking others.
* **Scalability:** As teams add more tools (e.g., GitHub, Slack, Notion), each integration scales independently.

**Analogy:** Think of airport boarding gates. Each gate (client) connects to exactly one flight (server). This avoids confusion, keeps passengers safe, and allows multiple flights to operate at the same time.

---

## What Does an MCP Server Offer? Primitives

An MCP server provides **primitives** — building blocks that the client can consume. These primitives come in three main types:

1. **Tools**: Functions the AI can call.

   * *Example*: A `searchPullRequests` tool from a GitHub server.

   ```json
   {
     "type": "tool",
     "name": "searchPullRequests",
     "parameters": {"repo": "string", "status": "open|closed"}
   }
   ```

2. **Resources**: Structured data the AI can retrieve.

   * *Example*: A Slack server exposing a channel’s history.

   ```json
   {
     "type": "resource",
     "name": "channelHistory",
     "fields": ["timestamp", "user", "message"]
   }
   ```

3. **Prompts**: Predefined templates for AI interaction.

   * *Example*: A Notion server providing a “summarize document” prompt.

   ```json
   {
     "type": "prompt",
     "name": "summarizeDocument",
     "template": "Summarize the following text: {{content}}"
   }
   ```

---

### Standard Operations on MCP Primitives

To make interaction consistent, each primitive supports a standard set of operations. Here’s a breakdown:

| Primitive Type | Standard Operations              | Example                                    |
| -------------- | -------------------------------- | ------------------------------------------ |
| **Tools**      | List, Describe, Call             | `searchPullRequests(repo, status)`         |
| **Resources**  | List, Describe, Fetch, Subscribe | `channelHistory(timestamp, user, message)` |
| **Prompts**    | List, Describe, Execute          | `summarizeDocument(content)`               |

This tabular structure ensures that no matter which server is connected, hosts can rely on a consistent vocabulary.

---

## Data Layer & Transport Layer in MCP

The MCP stack is built on **two layers**:

* **Data Layer:** Defines *what* is communicated.
* **Transport Layer:** Defines *how* it is communicated.

This separation provides clarity and modularity. The same data grammar can be sent over different transports (local or remote).

---

## MCP Data Layer: JSON-RPC 2.0

At the data layer, MCP uses **JSON-RPC 2.0**. This acts as the **grammar and language** of MCP — how requests and responses are structured.

### Why JSON-RPC 2.0 instead of REST?

* **Bidirectional Communication:** REST is limited to request-response initiated by the client. JSON-RPC supports notifications and server-to-client messages, which are crucial for streaming and event-driven applications.
* **Lightweight:** JSON-RPC is transport-agnostic and requires fewer conventions compared to REST’s resource-oriented design.
* **Consistency Across Distributed Systems:** In distributed AI applications, messages need to be passed quickly and flexibly. JSON-RPC provides a standardized envelope without REST’s verbosity (like headers and resource hierarchies).
* **Historical Use:** JSON-RPC has been used in blockchain (e.g., Ethereum nodes) and other distributed applications, proving its reliability for complex, asynchronous environments.

**Example JSON-RPC request:**

```json
{
  "jsonrpc": "2.0",
  "method": "listTools",
  "id": 1
}
```

**Example JSON-RPC response:**

```json
{
  "jsonrpc": "2.0",
  "result": ["searchPullRequests", "listCommits"],
  "id": 1
}
```

---

## MCP Transport Layer

The **transport layer** specifies *how* MCP messages are transmitted between client and server. Two main implementations exist:

### 1. Local Server (stdio)

* **Flow:**

  1. The host sends a request.
  2. The MCP client encodes it into JSON-RPC and writes it to **stdout**.
  3. The MCP server reads the request from **stdin**, processes it, and writes back the response to **stdout**.
  4. The client reads the response and passes it to the host.
* **Use Case:** Ideal for local development tools such as IDE plugins where both client and server run on the same machine.
* **Analogy:** Like having a walkie-talkie conversation within the same building—quick and efficient.

### 2. Remote Server (HTTP + SSE)

* **Flow:**

  1. The host sends a request via the client over **HTTP POST**.
  2. The MCP server processes the request and returns a structured JSON-RPC response.
  3. For real-time updates, the server pushes events back to the client using **Server-Sent Events (SSE)**.
  4. The client listens to the SSE stream to capture updates without repeatedly polling.
* **Use Case:** Ideal for cloud-hosted MCP servers like GitHub or Slack integrations where remote communication is required.
* **Analogy:** Like subscribing to a live news feed—once you’re connected, updates arrive automatically.

---

## Conclusion

The **architecture of MCP** balances simplicity with power. By separating host, client, and server roles, enforcing 1:1 relationships, and defining clear primitives, MCP creates a reliable framework for context exchange. With JSON-RPC as its language and flexible transport options, it ensures AI systems can scale across local and remote environments.

In the next part of this series, we’ll explore **real-world MCP integrations** and see how these architectural concepts come alive in practice.
