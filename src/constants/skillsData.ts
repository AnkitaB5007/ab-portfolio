import { IconType } from "react-icons";
import { FaPython, FaDocker, FaAws, FaGitAlt, FaLinux, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiKubernetes, SiJenkins, SiPostgresql, SiScikitlearn, SiJupyter, SiPrometheus, SiGrafana } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

interface Skill {
  skill: string;
  icon: IconType;
}

export const skills: Skill[] = [
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "TensorFlow",
    icon: SiTensorflow,
  },
  {
    skill: "PyTorch",
    icon: SiPytorch,
  },
  {
    skill: "Scikit-Learn",
    icon: SiScikitlearn,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Azure",
    icon: VscAzure,
  },
  {
    skill: "Jenkins",
    icon: SiJenkins,
  },
  {
    skill: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    skill: "Jupyter",
    icon: SiJupyter,
  },
  {
    skill: "ChromaDB",
    icon: FaDatabase,
  },
  {
    skill: "Prometheus",
    icon: SiPrometheus,
  },
  {
    skill: "Grafana",
    icon: SiGrafana,
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "Linux",
    icon: FaLinux,
  },
];
