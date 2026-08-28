import 'dotenv/config';
import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.PRISMA_DATABASE_URL || process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting seed...');

  // Clean existing data
  await prisma.newsArticleTool.deleteMany();
  await prisma.newsArticle.deleteMany();
  await prisma.toolScreenshot.deleteMany();
  await prisma.toolUseCase.deleteMany();
  await prisma.toolCapability.deleteMany();
  await prisma.toolPlatform.deleteMany();
  await prisma.toolCategory.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.platform.deleteMany();
  await prisma.category.deleteMany();

  // Create Categories
  const catCode = await prisma.category.create({
    data: {
      slug: 'code-assistants',
      name: 'Code Assistants',
      description: 'AI tools that help write, review, and maintain code.',
      accent: 'blue',
      sortOrder: 1,
    }
  });

  const catChat = await prisma.category.create({
    data: {
      slug: 'chatbots',
      name: 'Conversational AI',
      description: 'Chat interfaces for general purpose AI interaction.',
      accent: 'purple',
      sortOrder: 2,
    }
  });

  const catImage = await prisma.category.create({
    data: {
      slug: 'image-generation',
      name: 'Image Generation',
      description: 'Tools for creating and editing images using AI.',
      accent: 'amber',
      sortOrder: 3,
    }
  });

  // Create Platforms
  const platWeb = await prisma.platform.create({
    data: { slug: 'web', name: 'Web Browser', sortOrder: 1 }
  });

  const platMac = await prisma.platform.create({
    data: { slug: 'macos', name: 'macOS', sortOrder: 2 }
  });

  const platWin = await prisma.platform.create({
    data: { slug: 'windows', name: 'Windows', sortOrder: 3 }
  });

  const platApi = await prisma.platform.create({
    data: { slug: 'api', name: 'API', sortOrder: 4 }
  });

  // Create Tools
  const toolCopilot = await prisma.tool.create({
    data: {
      slug: 'github-copilot',
      name: 'GitHub Copilot',
      tagline: 'Your AI pair programmer',
      description: 'GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor.',
      logoUrl: 'https://placehold.co/200x200/222222/ffffff?text=Copilot',
      websiteUrl: 'https://github.com/features/copilot',
      companyName: 'GitHub',
      companyUrl: 'https://github.com',
      pricingModel: 'PAID',
      status: 'PUBLISHED',
      isFeatured: true,
      popularityScore: 99,
      publishedAt: new Date(),
      categories: {
        create: [{ categoryId: catCode.id }]
      },
      platforms: {
        create: [
          { platformId: platMac.id },
          { platformId: platWin.id }
        ]
      },
      capabilities: {
        create: [
          { title: 'Code Autocompletion', sortOrder: 1 },
          { title: 'Chat Interface', sortOrder: 2 }
        ]
      },
      useCases: {
        create: [
          { title: 'Writing boilerplates', sortOrder: 1 },
          { title: 'Writing unit tests', sortOrder: 2 }
        ]
      },
      screenshots: {
        create: [
          {
            imageUrl: 'https://placehold.co/1280x800/0d1117/58a6ff?text=Copilot+Code+Suggestions',
            altText: 'GitHub Copilot showing inline code suggestions in VS Code',
            caption: 'Real-time code suggestions as you type',
            sortOrder: 1,
          },
          {
            imageUrl: 'https://placehold.co/1280x800/0d1117/58a6ff?text=Copilot+Chat',
            altText: 'GitHub Copilot Chat panel explaining a function',
            caption: 'Ask Copilot to explain or refactor selected code',
            sortOrder: 2,
          },
        ]
      }
    }
  });

  const toolChatGPT = await prisma.tool.create({
    data: {
      slug: 'chatgpt',
      name: 'ChatGPT',
      tagline: 'Get instant answers, find creative inspiration, and learn something new.',
      description: 'ChatGPT is a conversational AI model developed by OpenAI, capable of understanding and generating human-like text across a wide range of topics.',
      logoUrl: 'https://placehold.co/200x200/10a37f/ffffff?text=ChatGPT',
      websiteUrl: 'https://chat.openai.com',
      companyName: 'OpenAI',
      companyUrl: 'https://openai.com',
      pricingModel: 'FREEMIUM',
      status: 'PUBLISHED',
      isFeatured: true,
      popularityScore: 100,
      publishedAt: new Date(),
      categories: {
        create: [{ categoryId: catChat.id }, { categoryId: catCode.id }]
      },
      platforms: {
        create: [
          { platformId: platWeb.id },
          { platformId: platMac.id },
          { platformId: platWin.id },
          { platformId: platApi.id }
        ]
      },
      capabilities: {
        create: [
          { title: 'Text Generation', sortOrder: 1 },
          { title: 'Data Analysis', sortOrder: 2 }
        ]
      },
      screenshots: {
        create: [
          {
            imageUrl: 'https://placehold.co/1280x800/1a1a2e/10a37f?text=ChatGPT+Conversation',
            altText: 'ChatGPT showing a multi-turn conversation interface',
            caption: 'Engage in rich multi-turn conversations with GPT-4o',
            sortOrder: 1,
          },
          {
            imageUrl: 'https://placehold.co/1280x800/1a1a2e/10a37f?text=ChatGPT+Data+Analysis',
            altText: 'ChatGPT Advanced Data Analysis interpreting a CSV file',
            caption: 'Upload data files and get instant analysis with charts',
            sortOrder: 2,
          },
          {
            imageUrl: 'https://placehold.co/1280x800/1a1a2e/10a37f?text=ChatGPT+Vision',
            altText: 'ChatGPT Vision mode describing an uploaded image',
            caption: 'Describe, compare, or debug any image with GPT-4o vision',
            sortOrder: 3,
          },
        ]
      }
    }
  });

  // Create News
  await prisma.newsArticle.create({
    data: {
      slug: 'gpt4-omni-release',
      title: 'OpenAI announces GPT-4o, its new flagship model',
      excerpt: 'The new model brings faster text, voice, and vision capabilities to all ChatGPT users.',
      body: 'OpenAI has launched GPT-4o, bringing native multimodal capabilities to ChatGPT. The new model processes text, audio, and visual inputs in real time, dramatically reducing latency in voice conversations and improving vision analysis.',
      sourceName: 'OpenAI Blog',
      sourceUrl: 'https://openai.com/index/hello-gpt-4o/',
      topic: 'Releases',
      status: 'PUBLISHED',
      isFeatured: true,
      publishedAt: new Date(),
      categoryId: catChat.id,
      tools: {
        create: [{ toolId: toolChatGPT.id }]
      }
    }
  });

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
