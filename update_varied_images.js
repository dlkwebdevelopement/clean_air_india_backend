const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const uploadsDir = path.join(__dirname, 'uploads');
const destDir = path.join(uploadsDir, 'images', 'blog_related');

// Ensure destination folder exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 22 blogs unique mapping
const blogsMapping = [
  {
    title: "Selecting the Right Biosafety Cabinet for Your Lab in India: Class II A2 vs B2",
    srcFile: "1758865764661-laminar9.jpg",
    destFile: "selecting-biosafety-cabinet.jpg"
  },
  {
    title: "Costing Guide: Cleanroom Equipment in India (Air Showers, Biosafety Cabinets & Laminar Flow Benches)",
    srcFile: "1758867445260-laminar2.png",
    destFile: "cleanroom-equipment-costing.png"
  },
  {
    title: "Why Laminar Flow Benches Are Essential for Pharma and Biotech Facilities in India",
    srcFile: "1758868541990-laminar6n.jpg",
    destFile: "why-laminar-flow-essential.jpg"
  },
  {
    title: "Laminar Airflow Systems for Cleanroom Solutions India",
    srcFile: "1758895346352-laminar9.jpg",
    destFile: "laminar-airflow-systems.jpg"
  },
  {
    title: "Air Shower Entry System",
    srcFile: "1758866828049-Air1.jpeg",
    destFile: "air-shower-entry-system.jpeg"
  },
  {
    title: "Biosafety Cabinets Class II, III, A2 & B2 Manufacturers in India",
    srcFile: "1758871068266-laminar9.jpg",
    destFile: "biosafety-cabinets-manufacturers.jpg"
  },
  {
    title: "Pass Boxes Manufacturers in Chennai & India | Clean Air Systems",
    srcFile: "1758866991696-box2.jpg",
    destFile: "pass-boxes-clean-air.jpg"
  },
  {
    title: "Modular Cleanrooms",
    srcFile: "1758861739132-modular-room5.jpg",
    destFile: "modular-cleanrooms-blog.jpg"
  },
  {
    title: "Downflow Booth",
    srcFile: "1758894544554-Powder2.jpg",
    destFile: "downflow-booth-blog.jpg"
  },
  {
    title: "Fan Filter Units",
    srcFile: "1759824579557-modular-room7.jpeg",
    destFile: "fan-filter-units-blog.jpeg"
  },
  {
    title: "Laboratory Fume Hoods & Laboratory Hoods Manufacturers in India",
    srcFile: "1758865826380-fume4.jpg",
    destFile: "laboratory-fume-hoods-india.jpg"
  },
  {
    title: "Pharma Weighing Booths",
    srcFile: "image-1758861225380-319459690.jpg",
    destFile: "pharma-weighing-booths-blog.jpg"
  },
  {
    title: "Powder Dispensing Booths Manufacturers in Chennai and India",
    srcFile: "1758894544554-Powder2.jpg",
    destFile: "powder-dispensing-booths.jpg"
  },
  {
    title: "Powder Containment Booths Manufacturers in Chennai & India",
    srcFile: "image-1758861225380-319459690.jpg",
    destFile: "powder-containment-booths-blog.jpg"
  },
  {
    title: "Reverse Flow Booth",
    srcFile: "1758894544554-Powder2.jpg",
    destFile: "reverse-flow-booth-blog.jpg"
  },
  {
    title: "Softwall Cleanrooms",
    srcFile: "1758863951045-modular-room2.jpg",
    destFile: "softwall-cleanrooms-blog.jpg"
  },
  {
    title: "Sterile Garment Storage Cabinet",
    srcFile: "1758866404002-Ste1.jpg",
    destFile: "sterile-garment-storage.jpg"
  },
  {
    title: "Fume Exhaust Hoods Manufacturers in Chennai and India",
    srcFile: "1758869046896-fume4.jpg",
    destFile: "fume-exhaust-hoods-blog.jpg"
  },
  {
    title: "Walk-In Fume Hoods Manufacturers in Chennai and India",
    srcFile: "1758865826380-fume4.jpg",
    destFile: "walk-in-fume-hoods.jpg"
  },
  {
    title: "Distillation Fume Hoods Manufacturers in Chennai and India",
    srcFile: "1758869046896-fume4.jpg",
    destFile: "distillation-fume-hoods.jpg"
  },
  {
    title: "Powder Sampling Booths Manufacturers in Chennai and India",
    srcFile: "1758894544554-Powder2.jpg",
    destFile: "powder-sampling-booths.jpg"
  },
  {
    title: "Static Pass Box Manufacturers in Chennai & India",
    srcFile: "1758866991696-box2.jpg",
    destFile: "static-pass-box-blog.jpg"
  }
];

// Copy files under unique names
blogsMapping.forEach(item => {
  const srcPath = path.join(uploadsDir, item.srcFile);
  const destPath = path.join(destDir, item.destFile);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${item.srcFile} -> ${item.destFile}`);
  } else {
    console.error(`Source not found: ${srcPath}`);
  }
});

// Update database
async function updateDatabase() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB successfully!');

    let updated = 0;
    for (const item of blogsMapping) {
      const blog = await Blog.findOne({ title: item.title });
      if (blog) {
        blog.featuredImage = `/uploads/images/blog_related/${item.destFile}`;
        await blog.save();
        console.log(`Updated Blog: "${blog.title}" -> ${blog.featuredImage}`);
        updated++;
      } else {
        console.log(`Blog not found in DB: "${item.title}"`);
      }
    }
    console.log(`Database updated successfully! Total updated: ${updated}/${blogsMapping.length}`);
  } catch (error) {
    console.error('Error updating DB:', error);
  } finally {
    mongoose.connection.close();
  }
}

updateDatabase();
