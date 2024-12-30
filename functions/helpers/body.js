import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

// Initialize Markdown-it
const md = new MarkdownIt();

// Read the Markdown file
const markdownPath = path.resolve(__dirname, '../markdown/newsletter-1.md');
const markdownContent = fs.readFileSync(markdownPath, 'utf8');

// Convert Markdown to HTML
const body = md.render(markdownContent);

export { body };
