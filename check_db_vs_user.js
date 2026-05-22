const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const titlesToCheck = [
  "Laminar Airflow Systems for Cleanroom Solutions India",
  "Biosafety Cabinets Class II, III, A2 & B2 Manufacturers in India",
  "Laboratory Fume Hoods & Laboratory Hoods Manufacturers in India",
  "Fume Exhaust Hoods Manufacturers in Chennai and India",
  "Walk-In Fume Hoods Manufacturers in Chennai and India",
  "Distillation Fume Hoods Manufacturers in Chennai and India",
  "Powder Containment Booths Manufacturers in Chennai & India",
  "Powder Sampling Booths Manufacturers in Chennai and India",
  "Powder Dispensing Booths Manufacturers in Chennai and India",
  "Pass Boxes Manufacturers in Chennai & India | Clean Air Systems",
  "Static Pass Box Manufacturers in Chennai & India"
];

async function check() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    for (const title of titlesToCheck) {
      const blog = await Blog.findOne({ title: title });
      if (blog) {
        console.log(`\n========================================`);
        console.log(`Title: ${blog.title}`);
        console.log(`Slug: ${blog.slug}`);
        console.log(`Content length: ${blog.content.length}`);
        console.log(`Excerpt: ${blog.excerpt}`);
        console.log(`Snippet (first 200 chars): ${blog.content.substring(0, 200).replace(/\r?\n/g, ' ')}`);
      } else {
        console.log(`\nBlog NOT FOUND: "${title}"`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

check();
