// Mock data for dashboard UI development
// Replace with real database queries when Prisma is set up

export interface User {
  id: string;
  email: string;
  name: string;
  isPro: boolean;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string;
  color: string;
  isSystem: boolean;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  title: string;
  contentType: "text" | "file";
  content?: string;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  url?: string;
  description?: string;
  isFavorite: boolean;
  isPinned: boolean;
  language?: string;
  typeId: string;
  collectionId?: string;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  isFavorite: boolean;
  itemCount: number;
  createdAt: string;
  updatedAt: string;
}

// Current user
export const currentUser: User = {
  id: "user_1",
  email: "john@example.com",
  name: "John Doe",
  isPro: false,
};

// System item types
export const itemTypes: ItemType[] = [
  { id: "type_1", name: "Snippet", icon: "</>", color: "#10b981", isSystem: true },
  { id: "type_2", name: "Prompt", icon: "💬", color: "#8b5cf6", isSystem: true },
  { id: "type_3", name: "Command", icon: ">_", color: "#f59e0b", isSystem: true },
  { id: "type_4", name: "Note", icon: "📝", color: "#3b82f6", isSystem: true },
  { id: "type_5", name: "File", icon: "📄", color: "#6b7280", isSystem: true },
  { id: "type_6", name: "Image", icon: "🖼️", color: "#ec4899", isSystem: true },
  { id: "type_7", name: "Link", icon: "🔗", color: "#06b6d4", isSystem: true },
];

// Collections
export const collections: Collection[] = [
  {
    id: "col_1",
    name: "React Patterns",
    description: "Common React patterns and best practices",
    isFavorite: true,
    itemCount: 12,
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-03-20T00:00:00Z",
  },
  {
    id: "col_2",
    name: "AI Prompts",
    description: "ChatGPT and Claude prompts",
    isFavorite: true,
    itemCount: 15,
    createdAt: "2024-02-01T00:00:00Z",
    updatedAt: "2024-03-18T00:00:00Z",
  },
  {
    id: "col_3",
    name: "DevOps",
    description: "Infrastructure and deployment resources",
    isFavorite: true,
    itemCount: 10,
    createdAt: "2024-01-20T00:00:00Z",
    updatedAt: "2024-03-15T00:00:00Z",
  },
  {
    id: "col_4",
    name: "Auth & Security",
    description: "Authentication patterns and security best practices",
    isFavorite: true,
    itemCount: 10,
    createdAt: "2024-02-10T00:00:00Z",
    updatedAt: "2024-03-22T00:00:00Z",
  },
];

// Items
export const items: Item[] = [
  {
    id: "item_1",
    title: "useDebounce Hook",
    contentType: "text",
    content: `import { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}`,
    description: "A custom React hook for debouncing values",
    isFavorite: true,
    isPinned: true,
    language: "typescript",
    typeId: "type_1",
    collectionId: "col_1",
    tags: [
      { id: "tag_1", name: "react" },
      { id: "tag_2", name: "hooks" },
      { id: "tag_3", name: "typescript" },
    ],
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "item_2",
    title: "API Architecture Notes",
    contentType: "text",
    content: "Notes on building scalable APIs with proper separation of concerns, rate limiting, and caching strategies.",
    description: "Notes on building scalable APIs",
    isFavorite: false,
    isPinned: true,
    typeId: "type_4",
    collectionId: "col_3",
    tags: [
      { id: "tag_4", name: "api" },
      { id: "tag_5", name: "architecture" },
      { id: "tag_6", name: "backend" },
    ],
    createdAt: "2024-02-01T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z",
  },
  {
    id: "item_3",
    title: "Kubernetes Pod Restart",
    contentType: "text",
    content: "kubectl rollout restart deployment/<deployment-name> -n <namespace>",
    description: "Restart all pods in a deployment",
    isFavorite: false,
    isPinned: true,
    language: "bash",
    typeId: "type_3",
    collectionId: "col_3",
    tags: [
      { id: "tag_7", name: "kubernetes" },
      { id: "tag_8", name: "devops" },
    ],
    createdAt: "2024-02-10T00:00:00Z",
    updatedAt: "2024-02-10T00:00:00Z",
  },
  {
    id: "item_4",
    title: "JWT Authentication Flow",
    contentType: "text",
    content: `import jwt from 'jsonwebtoken'

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  })
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!)
}`,
    description: "JWT token generation and verification",
    isFavorite: true,
    isPinned: true,
    language: "typescript",
    typeId: "type_1",
    collectionId: "col_4",
    tags: [
      { id: "tag_9", name: "auth" },
      { id: "tag_10", name: "jwt" },
      { id: "tag_3", name: "typescript" },
    ],
    createdAt: "2024-02-15T00:00:00Z",
    updatedAt: "2024-02-15T00:00:00Z",
  },
  {
    id: "item_5",
    title: "Code Review Prompt",
    contentType: "text",
    content: "Review this code for bugs, performance issues, and security vulnerabilities. Suggest improvements following SOLID principles and clean code practices. Be specific with line references.",
    description: "AI prompt for thorough code reviews",
    isFavorite: false,
    isPinned: false,
    typeId: "type_2",
    collectionId: "col_2",
    tags: [
      { id: "tag_11", name: "ai" },
      { id: "tag_12", name: "code-review" },
    ],
    createdAt: "2024-03-01T00:00:00Z",
    updatedAt: "2024-03-01T00:00:00Z",
  },
  {
    id: "item_6",
    title: "Docker Compose Postgres",
    contentType: "text",
    content: `version: '3.8'
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: devpass
      POSTGRES_DB: devstash
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:`,
    description: "Docker Compose for local Postgres development",
    isFavorite: false,
    isPinned: false,
    language: "yaml",
    typeId: "type_1",
    collectionId: "col_3",
    tags: [
      { id: "tag_8", name: "devops" },
      { id: "tag_13", name: "docker" },
      { id: "tag_14", name: "postgres" },
    ],
    createdAt: "2024-03-05T00:00:00Z",
    updatedAt: "2024-03-05T00:00:00Z",
  },
  {
    id: "item_7",
    title: "Explain Code Prompt",
    contentType: "text",
    content: "Explain this code step by step. Assume I understand the language basics but not this specific pattern or library. Include what problem it solves and when you would use it.",
    description: "AI prompt for code explanation",
    isFavorite: false,
    isPinned: false,
    typeId: "type_2",
    collectionId: "col_2",
    tags: [
      { id: "tag_11", name: "ai" },
      { id: "tag_15", name: "learning" },
    ],
    createdAt: "2024-03-08T00:00:00Z",
    updatedAt: "2024-03-08T00:00:00Z",
  },
  {
    id: "item_8",
    title: "React useLocalStorage Hook",
    contentType: "text",
    content: `import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}`,
    description: "Persist state to localStorage with this custom hook",
    isFavorite: false,
    isPinned: false,
    language: "typescript",
    typeId: "type_1",
    collectionId: "col_1",
    tags: [
      { id: "tag_1", name: "react" },
      { id: "tag_2", name: "hooks" },
      { id: "tag_3", name: "typescript" },
    ],
    createdAt: "2024-03-10T00:00:00Z",
    updatedAt: "2024-03-10T00:00:00Z",
  },
  {
    id: "item_9",
    title: "Git Squash Last N Commits",
    contentType: "text",
    content: "git reset --soft HEAD~N && git commit",
    description: "Squash the last N commits into one",
    isFavorite: false,
    isPinned: false,
    language: "bash",
    typeId: "type_3",
    tags: [
      { id: "tag_16", name: "git" },
    ],
    createdAt: "2024-03-12T00:00:00Z",
    updatedAt: "2024-03-12T00:00:00Z",
  },
  {
    id: "item_10",
    title: "Vercel Deployment Docs",
    contentType: "text",
    url: "https://vercel.com/docs/deployments/overview",
    description: "Official Vercel deployment documentation",
    isFavorite: false,
    isPinned: false,
    typeId: "type_7",
    tags: [
      { id: "tag_8", name: "devops" },
      { id: "tag_17", name: "vercel" },
    ],
    createdAt: "2024-03-14T00:00:00Z",
    updatedAt: "2024-03-14T00:00:00Z",
  },
];

// Dashboard stats (derived counts)
export const dashboardStats = {
  totalItems: items.length,
  totalCollections: collections.length,
  favoriteItems: items.filter((i) => i.isFavorite).length,
  favoriteCollections: collections.filter((c) => c.isFavorite).length,
};
