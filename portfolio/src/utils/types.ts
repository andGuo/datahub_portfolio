export type InventoryTool = {
  name: string;
  categories: string[];
  cost: string;
  protected_b_data: boolean;
  url: string;
  self_hosted_version: boolean;
  teams: string[];
  projects: string[];
  image?: string;
};

export type ProjectPage = {
  id: string;
  name: string;
  description: string;
  background: string[];
  problem: string;
  goal: string;
  solution: string;
  images: string[];
  cardImage: string;
  tools: string[];
  successMetrics?: string[];
};

export type TagType = {
  name: string;
  color: string;
};