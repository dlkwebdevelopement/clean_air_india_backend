const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const DB_URI = 'mongodb+srv://prithuapp_db_user:eETUIeouSRU7Xipu@cluster0.x0vkq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const updates = [
  {
    title: "Powder Containment Booths Manufacturers in Chennai & India",
    excerpt: "High-quality Powder Containment Booths from Clean Air Systems. Trusted manufacturers in Chennai and India offering safe powder handling, dust control, and advanced containment solutions for pharmaceutical and industrial applications.",
    content: `<p>Clean Air Systems is a leading manufacturer and supplier of Powder Containment Booths designed for safe, efficient, and contamination-free powder handling operations. Our systems are widely used in pharmaceutical industries, chemical processing units, food manufacturing, and research laboratories where dust control and operator safety are critical.</p>
<p>We deliver high-performance Powder Containment Booths Manufacturers in Chennai solutions with advanced engineering standards and strict quality control. Our systems ensure safe working environments by controlling airborne powder particles effectively.</p>

<h2>What are Powder Containment Booths?</h2>
<p>Powder Containment Booths are specialized enclosed systems designed to control dust and airborne particles during powder weighing, dispensing, and sampling operations. These booths maintain a controlled airflow environment that prevents contamination and protects both operators and products.</p>
<p>Clean Air Systems provides advanced solutions across Powder Containment Booths Chennai and Powder Containment Booths India with customized designs based on industry requirements.</p>

<h2>Applications of Powder Containment Booths</h2>
<p>Powder Containment Booths are widely used in:</p>
<ul>
  <li>Pharmaceutical manufacturing units</li>
  <li>Chemical industries</li>
  <li>Food processing plants</li>
  <li>Research and development laboratories</li>
  <li>Nutraceutical and cosmetic industries</li>
</ul>
<p>These systems ensure safe powder handling and maintain strict hygiene standards in sensitive environments.</p>
<p>Industries across Powder Containment Booths India rely on our solutions for efficient contamination control and safe production processes.</p>

<h2>Key Features of Powder Containment Booths</h2>
<ul>
  <li>High-efficiency HEPA filtration system</li>
  <li>Negative pressure airflow for dust control</li>
  <li>Stainless steel construction for durability</li>
  <li>Transparent panels for visibility</li>
  <li>Energy-efficient operation</li>
  <li>Low noise performance</li>
  <li>Easy cleaning and maintenance design</li>
  <li>Uniform airflow distribution system</li>
  <li>Customizable sizes and configurations</li>
  <li>Safe and ergonomic working environment</li>
</ul>
<p>These features make our systems highly reliable for modern industrial applications.</p>

<h2>Powder Containment Booths Manufacturers in Chennai & India</h2>
<p>Clean Air Systems is recognized as one of the trusted Powder Containment Booths Manufacturers in Chennai, delivering advanced containment solutions with precision engineering and strict quality standards.</p>
<p>We are also among the leading Powder Containment Booths Manufacturers in India, supplying durable and high-performance systems to pharmaceutical companies, laboratories, and industrial sectors.</p>
<p>Our manufacturing process ensures safety, reliability, and long-term performance in every system we deliver.</p>

<h2>Why Choose Clean Air Systems?</h2>
<p>Clean Air Systems is committed to providing high-quality Powder Containment Booths designed for maximum safety and efficiency. Our systems are widely used across Powder Containment Booths Chennai and Powder Containment Booths India due to their superior performance and reliability.</p>
<p>We focus on delivering customized containment solutions that meet industry requirements while maintaining cost-effectiveness and quality assurance.</p>
<p>With strong technical expertise and modern manufacturing facilities, we continue to support industries with safe and efficient powder handling solutions.</p>`
  },
  {
    title: "Powder Sampling Booths Manufacturers in Chennai and India",
    excerpt: "High-quality Powder Sampling Booths from Clean Air Systems. Safe containment systems for accurate powder sampling and dust control in pharma and industries. Trusted manufacturers in Chennai and India with reliable performance and hygienic design.",
    content: `<p>Clean Air Systems is a leading manufacturer and supplier of Powder Sampling Booths designed for safe, accurate, and contamination-free powder sampling operations. Our systems are widely used in pharmaceutical industries, chemical manufacturing units, food processing industries, and research laboratories where precision and hygiene are critical.</p>
<p>Powder sampling requires a highly controlled environment to prevent cross-contamination and ensure operator safety. Our Powder Sampling Booths are engineered to provide effective dust containment and clean airflow during sampling processes.</p>

<h2>What are Powder Sampling Booths?</h2>
<p>Powder Sampling Booths are specialized containment systems designed to control airborne powder particles during sampling and testing operations. These booths ensure that powder materials are handled in a clean and controlled environment without exposure to contamination.</p>
<p>At Clean Air Systems, our Powder Sampling Booths are built with advanced HEPA filtration and controlled airflow technology. The system maintains negative pressure to prevent powder escape and ensures safe sampling operations.</p>
<p>These booths are essential in industries where product purity and safety standards must be strictly maintained.</p>

<h2>Applications of Powder Sampling Booths</h2>
<p>Powder Sampling Booths are widely used in pharmaceutical manufacturing for sampling active ingredients and raw materials. They are also used in chemical industries for safe handling of powdered substances.</p>
<p>Food processing industries use these systems to ensure hygiene during ingredient sampling. Research laboratories and quality control departments rely on them for accurate testing and analysis.</p>
<p>Across Powder Sampling Booths Chennai and Powder Sampling Booths India, demand is increasing due to strict regulatory requirements and growing industrial safety standards.</p>

<h2>Key Features of Powder Sampling Booths</h2>
<p>Our Powder Sampling Booths are designed with advanced engineering to ensure safety, efficiency, and performance.</p>
<ul>
  <li>High-efficiency HEPA filtration that removes airborne particles effectively</li>
  <li>Negative pressure airflow design ensures that no powder escapes into the surrounding environment</li>
  <li>Stainless steel construction provides durability and easy cleaning</li>
  <li>Transparent panels offer clear visibility during sampling operations</li>
  <li>The system operates with low noise and energy-efficient performance</li>
  <li>Easy maintenance design ensures long service life and reduced downtime</li>
</ul>
<p>These features make Powder Sampling Booths highly reliable for industrial and laboratory applications.</p>

<h2>Powder Sampling Booths Chennai and India Demand</h2>
<p>The demand for Powder Sampling Booths Chennai solutions is increasing due to the expansion of pharmaceutical and chemical industries in the region.</p>
<p>Across Powder Sampling Booths India, industries are focusing on improving safety standards and ensuring contamination-free operations. This has increased the adoption of advanced sampling containment systems.</p>
<p>Clean Air Systems provides reliable and high-performance sampling solutions across India with strong technical support and industry expertise.</p>

<h2>Powder Sampling Booths Manufacturers in Chennai and India</h2>
<p>Clean Air Systems is recognized as one of the trusted Powder Sampling Booths Manufacturers in Chennai, delivering high-quality containment systems with advanced engineering and strict quality control.</p>
<p>We are also among the leading Powder Sampling Booths Manufacturers in India, supplying durable and efficient systems to pharmaceutical companies, chemical industries, research laboratories, and food processing units.</p>
<p>Our manufacturing process ensures high safety standards, long service life, and consistent performance in every system we deliver.</p>

<h2>Why Choose Clean Air Systems?</h2>
<p>Clean Air Systems is committed to delivering high-performance Powder Sampling Booths designed for maximum safety, accuracy, and contamination control.</p>
<p>Our systems are widely used across Powder Sampling Booths Chennai and Powder Sampling Booths India due to their reliable airflow design and hygienic construction.</p>
<p>We focus on providing efficient, safe, and durable sampling solutions that meet modern industrial and regulatory requirements.</p>`
  },
  {
    title: "Powder Dispensing Booths Manufacturers in Chennai and India",
    excerpt: "High-quality Powder Dispensing Booths from Clean Air Systems. Advanced containment systems for safe powder dispensing with HEPA filtration. Trusted manufacturers in Chennai and India offering reliable performance, hygiene control, and cost-effective solutions.",
    content: `<p>Clean Air Systems is a leading manufacturer and supplier of Powder Dispensing Booths designed for safe, controlled, and contamination-free powder handling operations in modern industries. These systems are widely used in pharmaceutical manufacturing units, chemical processing industries, food production facilities, cosmetic industries, and research laboratories where accurate powder dispensing and strict hygiene control are essential. Powder handling processes generate fine airborne particles that can easily spread contamination and affect product quality. Our Powder Dispensing Booths are engineered to control these airborne particles and provide a highly safe working environment for operators.</p>
<p>Powder dispensing is one of the most critical processes in pharmaceutical and chemical industries because even a small level of contamination can affect the final product quality. To overcome this challenge, Clean Air Systems provides advanced Powder Dispensing Booths that ensure controlled airflow, dust containment, and operator safety. These systems are designed to maintain a clean working zone by preventing powder particles from escaping into the surrounding environment.</p>

<h2>What are Powder Dispensing Booths?</h2>
<p>Powder Dispensing Booths are specialized containment systems used for controlled dispensing, weighing, and sampling of powdered materials. These booths are designed with HEPA-filtered airflow systems that remove airborne particles and maintain a clean environment during operations. The system works on a negative pressure principle that ensures dust and powder do not escape from the working area.</p>
<p>At Clean Air Systems, our Powder Dispensing Booths are developed with advanced engineering design and high-quality materials to ensure long-lasting performance and reliability. The airflow system is designed to provide uniform air distribution, which helps in effective particle capture and safe working conditions. These booths are essential in industries where precision, safety, and contamination control are highly important.</p>

<h2>Applications of Powder Dispensing Booths</h2>
<p>Powder Dispensing Booths are widely used in multiple industries due to their high safety standards and contamination control efficiency. In pharmaceutical industries, these systems are used for dispensing active pharmaceutical ingredients (APIs), raw materials, and fine powders. In chemical industries, they are used for handling reactive and hazardous powders safely.</p>
<p>Food processing industries use Powder Dispensing Booths to ensure hygiene during ingredient handling and mixing processes. Cosmetic manufacturing units also depend on these systems for safe powder formulation and blending operations. Research laboratories and quality control departments use these booths for accurate testing and sampling processes.</p>
<p>Across Powder Dispensing Booths Chennai and Powder Dispensing Booths India, demand is continuously increasing due to strict regulatory standards and growing awareness of workplace safety. Industries are focusing more on contamination-free production environments, making these systems essential for modern manufacturing facilities.</p>

<h2>Powder Dispensing Booths Price</h2>
<p>The Powder Dispensing Booths Price depends on several important factors such as booth size, airflow capacity, filtration system, material quality, and customization requirements. Larger booths with advanced features like automatic controls, enhanced HEPA filtration, and specialized airflow systems generally have higher pricing.</p>
<p>At Clean Air Systems, we ensure cost-effective solutions without compromising on quality or safety. Our pricing structure is designed to suit small laboratories, medium-scale production units, and large pharmaceutical manufacturing facilities. We also provide customized designs based on specific industrial requirements, ensuring maximum efficiency and value for investment.</p>
<p>We maintain transparency in pricing and provide long-term support for installation, maintenance, and performance optimization of all Powder Dispensing Booth systems.</p>

<h2>Powder Dispensing Booths Manufacturers in Chennai & India</h2>
<p>Clean Air Systems is recognized as one of the trusted Powder Dispensing Booths Manufacturers in Chennai, known for delivering high-quality containment solutions with advanced engineering and strict quality control standards. Our manufacturing facility follows industry-best practices to ensure every system meets international safety and performance standards.</p>
<p>We are also among the leading Powder Dispensing Booths Manufacturers in India, supplying durable and efficient systems to pharmaceutical companies, chemical industries, biotechnology labs, research institutions, and food manufacturing units across the country. Our systems are designed to provide long-term performance, safety, and operational efficiency.</p>
<p>Our engineering team focuses on innovation, precision design, and customer-specific requirements to deliver highly efficient containment solutions. Each Powder Dispensing Booth is tested for airflow performance, contamination control efficiency, and durability before delivery.</p>

<h2>Key Features of Powder Dispensing Booths</h2>
<p>Our Powder Dispensing Booths come with advanced features designed for safety and performance. The system includes high-efficiency HEPA filtration that removes fine airborne particles effectively. The negative pressure design ensures that powder particles do not escape into the surrounding environment.</p>
<p>The booth structure is made of high-quality stainless steel, ensuring durability, corrosion resistance, and easy cleaning. Transparent panels provide clear visibility for operators during dispensing operations. The system operates with low noise and energy-efficient performance, making it suitable for modern industrial environments.</p>
<p>The airflow system is designed for uniform distribution, ensuring effective containment of dust particles. Easy maintenance design helps reduce downtime and improves operational efficiency. These features make our systems highly reliable for critical applications in pharmaceutical and industrial sectors.</p>

<h2>Importance of Powder Dispensing Booths in Modern Industries</h2>
<p>In modern manufacturing industries, maintaining contamination-free environments is a top priority. Powder Dispensing Booths play a crucial role in ensuring product quality, operator safety, and regulatory compliance. These systems help industries meet international standards such as GMP and ISO guidelines.</p>
<p>With increasing demand for high-quality pharmaceutical and chemical products, industries are investing in advanced containment systems like Powder Dispensing Booths to improve safety and efficiency. Clean Air Systems provides reliable solutions that support these industry requirements effectively.</p>

<h2>Why Choose Clean Air Systems?</h2>
<p>Clean Air Systems is committed to delivering high-performance Powder Dispensing Booths designed for maximum safety, efficiency, and contamination control. Our systems are widely used across Powder Dispensing Booths Chennai and Powder Dispensing Booths India due to their reliability and strong performance.</p>
<p>We focus on providing advanced engineering solutions, durable construction, and efficient airflow systems that meet modern industrial standards. Our commitment to quality and customer satisfaction makes us a trusted name in cleanroom and containment technology across India.</p>`
  }
];

async function runUpdate() {
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');

    let updatedCount = 0;
    for (const update of updates) {
      const blog = await Blog.findOne({ title: update.title });
      if (blog) {
        blog.content = update.content;
        blog.excerpt = update.excerpt;
        // Explicitly trigger presave middleware by marking modified
        blog.markModified('content');
        blog.markModified('excerpt');
        
        await blog.save();
        console.log(`Updated content successfully for: "${update.title}"`);
        updatedCount++;
      } else {
        console.log(`Warning: Blog not found for title "${update.title}"`);
      }
    }

    console.log(`\nUpdate finished. Total updated: ${updatedCount}/${updates.length}`);
  } catch (error) {
    console.error('Error during update:', error);
  } finally {
    mongoose.connection.close();
  }
}

runUpdate();
