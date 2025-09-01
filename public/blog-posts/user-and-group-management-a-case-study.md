+++
date = '2025-07-24T14:50:06+02:00'
draft = true
title = 'User and Group Management a Case Study'

## Create a user chefgordon and add them to a group hellskitchen.
Creating a user is pretty simple! We will create a user called 'devops_user' and when we create a user, automatically a group with the same name is created. This is the default behavior of the `useradd` command.

```bash
ubuntu@ip-172-31-37-60:~$ sudo useradd -m chefgordon
ubuntu@ip-172-31-37-60:~$ sudo passwd chefgordon
New password:
Retype new password:
passwd: password updated successfully
```
Now we can check the user and group we created:

To verify that the user and group were created successfully, we can check the `/etc/passwd` and `/etc/group` files:

```bash
ubuntu@ip-172-31-37-60:~$ grep chefgordon /etc/passwd
chefgordon:x:1001:1001::/home/chefgordon:/bin/sh
ubuntu@ip-172-31-37-60:~$ grep chefgordon /etc/group
chefgordon:x:1001:
```

### Add the user to a group hellskitchen.

```bash
ubuntu@ip-172-31-37-60:~$ sudo groupadd hellskitchen
ubuntu@ip-172-31-37-60:~$ sudo usermod -aG hellskitchen chefgordon
ubuntu@ip-172-31-37-60:~$ groups chefgordon
chefgordon : chefgordon hellskitchen
```
## Grant the group hellskitchen sudo privileges.

```bash
ubuntu@ip-172-31-37-60:~$ sudo visudo
```
In the visudo editor, add the following line at the end of the file:
```bash
%hellskitchen ALL=(ALL) NOPASSWD: ALL
```

### Verify sudo privileges for the user chefgordon.
```bash
ubuntu@ip-172-31-37-60:~$ sudo -l -U chefgordon
User chefgordon may run the following commands on ip-172-31-37-60:
    (ALL : ALL) NOPASSWD: ALL
```
This line grants the `hellskitchen` group passwordless sudo access to all commands. Save and exit the editor.

### Another way to grant sudo privileges to a user is by adding them to the sudoers file.

```bash
ubuntu@ip-172-31-37-60:~$ sudo usermod -aG sudo chefgordon
```

## How can I enable chefgordon to use ssh to login to EC2 instance?
To enable the user `chefgordon` to use SSH to log in to the EC2 instance, we need to create an SSH key pair and add the public key to the user's `~ .ssh/authorized_keys` file. Here are the steps: 
1. **Generate an SSH Key Pair** (if not already done):
   On your local machine, run the following command to generate an SSH key pair:
   ```bash
   ssh-keygen -t rsa -b 2048 -f ~/.ssh/chefgordon_key
   ```
   This will create two files: `chefgordon_key` (private key) and `chefgordon_key.pub` (public key).
2. **Copy the Public Key to the EC2 Instance**:
   Use the following command to copy the public key to the EC2 instance:
   ```bash
   scp -i /path/to/your/private/key.pem ~/.ssh/chefgordon_key.pub ubuntu@ip-172-31-37-60:/home/chefgordon/.ssh/authorized_keys
   ```
   Replace `/path/to/your/private/key.pem` with the path to your existing SSH key that you use to connect to the EC2 instance, and `ip-172-31-37-60` with the actual public IP or DNS of your EC2 instance.
3. **Set Permissions for the `.ssh` Directory**:
   After copying the public key, SSH into the EC2 instance and set the correct permissions for the `.ssh` directory and the `authorized_keys` file:
   ```bash
   ssh -i /path/to/your/private/key.pem chefgordon@ip-172-31-37-60
   ```
   ```bash
   sudo chmod 700 /home/chefgordon/.ssh
   sudo chmod 600 /home/chefgordon/.ssh/authorized_keys
   sudo chown -R chefgordon:chefgordon /home/chefgordon/.ssh
   ```
4. **Test SSH Access**:
   Now, you can test SSH access using the private key:
   ```bash
   ssh -i ~/.ssh/chefgordon_key chefgordon@ip-172-31-37-60
   ```


## Restrict ssh access to user uncleroger.
To restrict SSH access for a specific user, we can modify the SSH configuration file. In this case, we will restrict SSH access for the user `uncleroger`. 
```bash
ubuntu@ip-172-31-37-60:~$ sudo nano /etc/ssh/sshd_config
```
```bash
# Add the following line at the end of the file
DenyUsers uncleroger
```
1. Verify SSH Configuration Syntax

Before assuming DenyUsers uncleroger is in effect, check for syntax errors in the SSH daemon configuration:

```bash
sudo sshd -t
```

If this command returns no output, the syntax is valid. Any error will be printed on the terminal and must be resolved.

Also, confirm the exact line in /etc/ssh/sshd_config:

```bash
grep -i '^DenyUsers' /etc/ssh/sshd_config
DenyUsers uncleroger
```

2. Restart the SSH Service
After making changes to the SSH configuration, restart the SSH service to apply them:

```bash
sudo systemctl restart sshd
```
### Verify that the user uncleroger cannot SSH into the server.
```bash
# Verify that the user uncleroger cannot SSH into the server
```bash
ubuntu@ip-172-31-37-60:~$ ssh uncleroger@ip-172-31-37-60
```

ssh: connect to host ip-172-31-37-60 port 22: Connection refused

```bash
ubuntu@ip-172-31-40-157:~$ sudo grep 'uncleroger' /var/log/auth.log | grep 'sshd'
```
```plaintext
2025-07-22T15:12:00.674259+00:00 ip-172-31-40-157 sshd[1573]: User uncleroger from 79.209.187.23 not allowed because listed in DenyUsers

2025-07-22T15:12:00.925483+00:00 ip-172-31-40-157 sshd[1573]: Connection closed by invalid user uncleroger 79.209.187.23 port 36762 [preauth]
``` 

