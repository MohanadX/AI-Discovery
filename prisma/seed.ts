import "dotenv/config";
import { PrismaClient, PricingModel } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString =
  process.env.PRISMA_DATABASE_URL || process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting seed...");

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

  const categoriesData = [
    {
      slug: "code-assistants",
      name: "Code Assistants",
      description: "AI tools that help write, review, and maintain code.",
      accent: "blue",
      sortOrder: 1,
    },
    {
      slug: "chatbots",
      name: "Conversational AI",
      description: "Chat interfaces for general purpose AI interaction.",
      accent: "purple",
      sortOrder: 2,
    },
    {
      slug: "image-generation",
      name: "Image Generation",
      description: "Tools for creating and editing images using AI.",
      accent: "amber",
      sortOrder: 3,
    },
    {
      slug: "audio-generation",
      name: "Audio Generation",
      description: "AI tools for music, voice, and audio generation.",
      accent: "green",
      sortOrder: 4,
    },
    {
      slug: "video-generation",
      name: "Video Generation",
      description: "Create and edit videos using AI.",
      accent: "red",
      sortOrder: 5,
    },
    {
      slug: "writing-assistants",
      name: "Writing Assistants",
      description: "Tools that help you write better content.",
      accent: "teal",
      sortOrder: 6,
    },
    {
      slug: "productivity",
      name: "Productivity",
      description: "AI tools to boost your daily productivity.",
      accent: "amber",
      sortOrder: 7,
    },
    {
      slug: "design",
      name: "Design",
      description: "AI tools for graphic design and UI/UX.",
      accent: "purple",
      sortOrder: 8,
    },
    {
      slug: "data-analysis",
      name: "Data Analysis",
      description: "Analyze data and generate insights with AI.",
      accent: "blue",
      sortOrder: 9,
    },
    {
      slug: "marketing",
      name: "Marketing",
      description: "AI tools for marketing and SEO.",
      accent: "amber",
      sortOrder: 10,
    },
  ];

  const dbCategories = [];
  for (const c of categoriesData) {
    dbCategories.push(await prisma.category.create({ data: c }));
  }

  // Create Platforms
  const platformsData = [
    { slug: "web", name: "Web Browser", sortOrder: 1 },
    { slug: "macos", name: "macOS", sortOrder: 2 },
    { slug: "windows", name: "Windows", sortOrder: 3 },
    { slug: "api", name: "API", sortOrder: 4 },
    { slug: "ios", name: "iOS", sortOrder: 5 },
    { slug: "android", name: "Android", sortOrder: 6 },
  ];

  const dbPlatforms = [];
  for (const p of platformsData) {
    dbPlatforms.push(await prisma.platform.create({ data: p }));
  }

  // Generate 100 tools
  const adjectives = [
    "Smart",
    "Magic",
    "Quantum",
    "Neural",
    "Deep",
    "Fast",
    "Auto",
    "Pro",
    "Neo",
    "Hyper",
    "Super",
    "Omni",
    "Synapse",
    "Nexus",
    "Echo",
    "Aura",
  ];
  const nouns = [
    "AI",
    "Bot",
    "Genius",
    "Mind",
    "Brain",
    "Forge",
    "Spark",
    "Flow",
    "Wave",
    "Engine",
    "Core",
    "Matrix",
    "Pulse",
    "Craft",
    "Vision",
    "Voice",
  ];
  const pricingModels: PricingModel[] = [
    "FREE",
    "FREEMIUM",
    "PAID",
    "FREE_TRIAL",
    "CONTACT",
  ];

  console.log("Generating tools...");
  for (let i = 1; i <= 30; i++) {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const toolName = `${randomAdjective} ${randomNoun} ${i}`;
    const slug = `${randomAdjective.toLowerCase()}-${randomNoun.toLowerCase()}-${i}`;

    // Pick 1-3 random categories
    const numCats = Math.floor(Math.random() * 3) + 1;
    const shuffledCats = [...dbCategories].sort(() => 0.5 - Math.random());
    const selectedCats = shuffledCats.slice(0, numCats);

    // Pick 1-4 random platforms
    const numPlats = Math.floor(Math.random() * 4) + 1;
    const shuffledPlats = [...dbPlatforms].sort(() => 0.5 - Math.random());
    const selectedPlats = shuffledPlats.slice(0, numPlats);

    const pricingModel =
      pricingModels[Math.floor(Math.random() * pricingModels.length)];
    // Make most tools published
    const status = Math.random() > 0.1 ? "PUBLISHED" : "DRAFT";

    await prisma.tool.create({
      data: {
        slug: slug,
        name: toolName,
        tagline: `The best ${randomAdjective.toLowerCase()} solution for your needs.`,
        description: `This is a generated AI tool description for ${toolName}. It leverages state-of-the-art models to provide amazing features.`,
        logoUrl: `https://placehold.co/200x200/${Math.floor(
          Math.random() * 16777215,
        )
          .toString(16)
          .padStart(6, "0")}/ffffff?text=${toolName.charAt(0)}`,
        websiteUrl: `https://${slug}.example.com`,
        companyName: `${randomAdjective} Tech LLC`,
        companyUrl: `https://${randomAdjective.toLowerCase()}tech.example.com`,
        pricingModel: pricingModel,
        status: status,
        isFeatured: Math.random() > 0.9,
        popularityScore: Math.floor(Math.random() * 100),
        publishedAt:
          status === "PUBLISHED"
            ? new Date(Date.now() - Math.floor(Math.random() * 10000000000))
            : null,
        categories: {
          create: selectedCats.map((c) => ({ categoryId: c.id })),
        },
        platforms: {
          create: selectedPlats.map((p) => ({ platformId: p.id })),
        },
        capabilities: {
          create: [
            { title: "Feature One", sortOrder: 1 },
            { title: "Feature Two", sortOrder: 2 },
          ],
        },
      },
    });
  }

  // Create 20 News Articles
  console.log("Generating news articles...");
  const newsTopics = ["Releases", "Funding", "Research", "Acquisitions", "Opinion", "Guide"];
  const newsSources = [
    { name: "OpenAI Blog", url: "https://openai.com/blog" },
    { name: "Anthropic News", url: "https://anthropic.com/news" },
    { name: "Google DeepMind", url: "https://deepmind.google/discover" },
    { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/" },
    { name: "The Verge AI", url: "https://theverge.com/ai-artificial-intelligence" }
  ];

  for (let i = 1; i <= 20; i++) {
    const randomTopic = newsTopics[Math.floor(Math.random() * newsTopics.length)];
    const randomSource = newsSources[Math.floor(Math.random() * newsSources.length)];
    const randomCategory = dbCategories[Math.floor(Math.random() * dbCategories.length)];
    
    await prisma.newsArticle.create({
      data: {
        slug: `ai-news-update-${i}-${Date.now()}`,
        title: `AI Industry Update ${i}: Major Developments in ${randomTopic}`,
        excerpt: `A quick summary of the latest advancements in ${randomTopic} and what it means for the ecosystem.`,
        body: `Local summary: Recent events have shown significant progress in the field of AI, particularly concerning ${randomTopic.toLowerCase()}. \n\nExperts from ${randomSource.name} note that these changes will likely affect how developers and end-users interact with next-generation models. The new techniques introduced are designed to improve both efficiency and accuracy across multiple domains.\n\nFor the full story and detailed technical breakdown, visit the original source.`,
        sourceName: randomSource.name,
        sourceUrl: randomSource.url,
        topic: randomTopic,
        status: "PUBLISHED",
        isFeatured: i <= 3,
        readingMinutes: Math.floor(Math.random() * 5) + 2,
        publishedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
        categoryId: randomCategory.id,
      },
    });
  }

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
