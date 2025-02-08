import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.NEWSDATA_API_KEY;
    if (!API_KEY) {
      throw new Error('API key missing');
    }

    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=Sudan&language=en&category=politics,world&image=1`, 
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.results?.length) {
      throw new Error('No news results');
    }

    const articles = data.results
      .filter((article: any) => {
        const text = `${article.title} ${article.description}`.toLowerCase();
        return text.includes('sudan') && 
               article.image_url &&
               article.title &&
               article.description;
      })
      .slice(0, 9)
      .map((article: any, index: number) => ({
        id: index + 1,
        title: article.title,
        summary: article.description,
        date: article.pubDate,
        url: article.link,
        imageUrl: article.image_url,
        source: article.source_id,
        category: article.category?.[0] || 'World'
      }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error('News API Error:', error);
    throw error;
  }
}