/* ========================================
   ColorPop — Vanilla JavaScript E-Commerce
   No frameworks, no dependencies
   ======================================== */

'use strict';

/* ========================================
   1. PRODUCT DATA (16 products, 5 categories)
   ======================================== */
const PRODUCTS = [
  // ==================== Fashion (20) ====================
  { id: 'f1', name: 'Classic White Tee', category: 'Fashion', price: 499, rating: 4.5, image: 'https://images.pexels.com/photos/37704845/pexels-photo-37704845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A premium 100% cotton white t-shirt. Soft, breathable and perfect for everyday wear.' },
  { id: 'f2', name: 'Blue Denim Jeans', category: 'Fashion', price: 1299, rating: 4.6, image: 'https://images.pexels.com/photos/10133278/pexels-photo-10133278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Slim-fit blue denim jeans with a classic five-pocket design. Durable and stylish.' },
  { id: 'f3', name: 'Floral Summer Dress', category: 'Fashion', price: 899, rating: 4.7, image: 'https://images.pexels.com/photos/37735142/pexels-photo-37735142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A vibrant floral summer dress that keeps you cool and fashionable all day long.' },
  { id: 'f4', name: 'Leather Jacket', category: 'Fashion', price: 2499, rating: 4.8, image: 'https://images.pexels.com/photos/36484175/pexels-photo-36484175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Premium faux-leather jacket with a modern cut. A wardrobe essential for every season.' },
  { id: 'f5', name: 'Black Hoodie Sweatshirt', category: 'Fashion', price: 899, rating: 4.5, image: 'https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Oversized hooded sweatshirt in classic black. Cozy fleece lining for ultimate comfort.' },
  { id: 'f6', name: 'Casual Summer Shorts', category: 'Fashion', price: 599, rating: 4.3, image: 'https://images.pexels.com/photos/12803209/pexels-photo-12803209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Lightweight casual shorts perfect for warm summer days. Relaxed fit with elastic waist.' },
  { id: 'f7', name: 'Traditional Red Saree', category: 'Fashion', price: 2999, rating: 4.8, image: 'https://images.pexels.com/photos/14928074/pexels-photo-14928074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant traditional red saree with intricate border work. Perfect for festivals and weddings.' },
  { id: 'f8', name: 'Formal Dress Shirt', category: 'Fashion', price: 1099, rating: 4.6, image: 'https://images.pexels.com/photos/4443831/pexels-photo-4443831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Premium formal dress shirt in dotted blue. Wrinkle-resistant fabric with a tailored fit.' },
  { id: 'f9', name: 'Winter Knit Sweater', category: 'Fashion', price: 1199, rating: 4.5, image: 'https://images.pexels.com/photos/14673793/pexels-photo-14673793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Colorful knitted winter sweater with festive patterns. Warm, soft and incredibly cozy.' },
  { id: 'f10', name: 'Red Kurti Ethnic Wear', category: 'Fashion', price: 799, rating: 4.6, image: 'https://images.pexels.com/photos/35521738/pexels-photo-35521738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Beautiful red kurti showcasing traditional Indian fashion. Comfortable cotton blend fabric.' },
  { id: 'f11', name: 'Jogger Pants Athleisure', category: 'Fashion', price: 699, rating: 4.4, image: 'https://images.pexels.com/photos/7869643/pexels-photo-7869643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Sporty jogger pants in gray with tapered fit. Perfect for workouts or casual outings.' },
  { id: 'f12', name: 'Denim Mini Skirt', category: 'Fashion', price: 799, rating: 4.4, image: 'https://images.pexels.com/photos/14205825/pexels-photo-14205825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Classic denim mini skirt with a modern silhouette. Pairs perfectly with any top.' },
  { id: 'f13', name: 'Beige Trench Coat', category: 'Fashion', price: 2799, rating: 4.7, image: 'https://images.pexels.com/photos/35332621/pexels-photo-35332621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish beige trench coat with a timeless design. Water-resistant and elegantly tailored.' },
  { id: 'f14', name: 'Polo Shirt Casual', category: 'Fashion', price: 649, rating: 4.3, image: 'https://images.pexels.com/photos/6511656/pexels-photo-6511656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Classic polo shirt with a relaxed fit. Breathable pique cotton for all-day comfort.' },
  { id: 'f15', name: 'Striped Maxi Dress', category: 'Fashion', price: 1099, rating: 4.6, image: 'https://images.pexels.com/photos/25731827/pexels-photo-25731827.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Vibrant striped maxi dress perfect for sunny outings. Flowy fabric with elegant drape.' },
  { id: 'f16', name: 'Stylish Crop Top', category: 'Fashion', price: 449, rating: 4.4, image: 'https://images.pexels.com/photos/17200344/pexels-photo-17200344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Trendy crop top that pairs effortlessly with high-waist bottoms. Soft stretchy fabric.' },
  { id: 'f17', name: 'Chino Trousers', category: 'Fashion', price: 999, rating: 4.5, image: 'https://images.pexels.com/photos/29547631/pexels-photo-29547631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Versatile chino trousers with a slim fit. Ideal for both casual and semi-formal looks.' },
  { id: 'f18', name: 'Red Blazer Formal', category: 'Fashion', price: 1899, rating: 4.6, image: 'https://images.pexels.com/photos/8367782/pexels-photo-8367782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Bold red blazer for a powerful professional look. Structured shoulders and sleek fit.' },
  { id: 'f19', name: 'Yoga Leggings', category: 'Fashion', price: 599, rating: 4.5, image: 'https://images.pexels.com/photos/7746223/pexels-photo-7746223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'High-waist yoga leggings with four-way stretch. Moisture-wicking and squat-proof.' },
  { id: 'f20', name: 'Graphic Print T-Shirt', category: 'Fashion', price: 549, rating: 4.4, image: 'https://images.pexels.com/photos/2451200/pexels-photo-2451200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'T-shirt with an artistic graphic print and inspirational quote. A standout casual piece.' },

  // ==================== Electronics (20) ====================
  { id: 'e1', name: 'Wireless Headphones', category: 'Electronics', price: 1999, rating: 4.5, image: 'https://images.pexels.com/photos/7772548/pexels-photo-7772548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Over-ear wireless headphones with active noise cancellation and 30-hour battery life.' },
  { id: 'e2', name: 'Smart Watch Pro', category: 'Electronics', price: 3499, rating: 4.6, image: 'https://images.pexels.com/photos/13007642/pexels-photo-13007642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Track your fitness, heart rate and sleep with this sleek smartwatch. Water-resistant.' },
  { id: 'e3', name: 'Bluetooth Speaker', category: 'Electronics', price: 1499, rating: 4.4, image: 'https://images.pexels.com/photos/9767549/pexels-photo-9767549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Portable Bluetooth speaker with deep bass and 12-hour playback. Perfect for any adventure.' },
  { id: 'e4', name: 'True Wireless Earbuds', category: 'Electronics', price: 1299, rating: 4.5, image: 'https://images.pexels.com/photos/8858287/pexels-photo-8858287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'True wireless earbuds with charging case. Crystal clear audio and touch controls.' },
  { id: 'e5', name: 'Power Bank 20000mAh', category: 'Electronics', price: 999, rating: 4.4, image: 'https://images.pexels.com/photos/6296911/pexels-photo-6296911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'High-capacity 20000mAh power bank with fast charging. Never run out of battery again.' },
  { id: 'e6', name: 'Aluminum Laptop Stand', category: 'Electronics', price: 1199, rating: 4.5, image: 'https://images.pexels.com/photos/6893333/pexels-photo-6893333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Ergonomic aluminum laptop stand. Improves airflow and reduces neck strain.' },
  { id: 'e7', name: 'RGB Mechanical Keyboard', category: 'Electronics', price: 2499, rating: 4.7, image: 'https://images.pexels.com/photos/9020272/pexels-photo-9020272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Mechanical keyboard with RGB backlight and tactile switches. Built for typing and gaming.' },
  { id: 'e8', name: 'Wireless Gaming Mouse', category: 'Electronics', price: 1399, rating: 4.5, image: 'https://images.pexels.com/photos/18966481/pexels-photo-18966481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Precision wireless gaming mouse with adjustable DPI and programmable buttons.' },
  { id: 'e9', name: 'HD Webcam', category: 'Electronics', price: 1599, rating: 4.3, image: 'https://images.pexels.com/photos/28940577/pexels-photo-28940577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Full HD webcam with auto-focus and built-in microphone. Perfect for video calls.' },
  { id: 'e10', name: 'Modern Smartphone', category: 'Electronics', price: 12999, rating: 4.6, image: 'https://images.pexels.com/photos/30639091/pexels-photo-30639091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Flagship smartphone with triple camera system, OLED display and all-day battery.' },
  { id: 'e11', name: 'Tablet Device', category: 'Electronics', price: 8999, rating: 4.5, image: 'https://images.pexels.com/photos/38639/mockup-psd-ipad-iphone-38639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Versatile tablet with stunning Retina display. Perfect for work, streaming and creativity.' },
  { id: 'e12', name: 'USB-C Hub Adapter', category: 'Electronics', price: 799, rating: 4.3, image: 'https://images.pexels.com/photos/20076003/pexels-photo-20076003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Multi-port USB-C hub with HDMI, USB 3.0 and Ethernet. Expand your connectivity.' },
  { id: 'e13', name: 'Wireless Charging Pad', category: 'Electronics', price: 699, rating: 4.4, image: 'https://images.pexels.com/photos/5961044/pexels-photo-5961044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Sleek wireless charging pad with fast charge support. Compatible with all Qi devices.' },
  { id: 'e14', name: 'Fitness Tracker Band', category: 'Electronics', price: 1099, rating: 4.3, image: 'https://images.pexels.com/photos/374133/pexels-photo-374133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Slim fitness tracker with step counting, heart rate monitor and sleep tracking.' },
  { id: 'e15', name: 'Action Camera 4K', category: 'Electronics', price: 4999, rating: 4.6, image: 'https://images.pexels.com/photos/4817132/pexels-photo-4817132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Waterproof 4K action camera with image stabilization. Capture every adventure in detail.' },
  { id: 'e16', name: 'Mini Projector Portable', category: 'Electronics', price: 3999, rating: 4.4, image: 'https://images.pexels.com/photos/14971920/pexels-photo-14971920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Portable mini projector with HD resolution. Turn any wall into a home theater.' },
  { id: 'e17', name: 'Ring Light Pro', category: 'Electronics', price: 899, rating: 4.3, image: 'https://images.pexels.com/photos/5149734/pexels-photo-5149734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Professional ring light with adjustable brightness and color temperature. Perfect for content.' },
  { id: 'e18', name: 'HD Drone Quadcopter', category: 'Electronics', price: 6999, rating: 4.5, image: 'https://images.pexels.com/photos/5555813/pexels-photo-5555813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Sleek drone with HD camera and stable flight controls. Capture stunning aerial views.' },
  { id: 'e19', name: 'Smart LED Bulb', category: 'Electronics', price: 449, rating: 4.4, image: 'https://images.pexels.com/photos/20713462/pexels-photo-20713462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Wi-Fi enabled smart LED bulb with 16 million colors. Control from your phone.' },
  { id: 'e20', name: 'Smart Security Camera', category: 'Electronics', price: 1799, rating: 4.3, image: 'https://images.pexels.com/photos/28940577/pexels-photo-28940577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Indoor smart security camera with night vision and motion alerts. Monitor your home remotely.' },

  // ==================== Home & Living (20) ====================
  { id: 'h1', name: 'Modern Table Lamp', category: 'Home & Living', price: 799, rating: 4.3, image: 'https://images.pexels.com/photos/35392792/pexels-photo-35392792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant decorative table lamp with warm LED lighting. Adds ambiance to any room.' },
  { id: 'h2', name: 'Decorative Throw Pillow', category: 'Home & Living', price: 399, rating: 4.4, image: 'https://images.pexels.com/photos/1239221/pexels-photo-1239221.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Soft and colorful throw pillow cover. A quick and easy way to refresh your living space.' },
  { id: 'h3', name: 'Ceramic Vase Set', category: 'Home & Living', price: 699, rating: 4.5, image: 'https://images.pexels.com/photos/19341648/pexels-photo-19341648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A set of contemporary ceramic vases with artistic finishes. Perfect for dried or fresh flowers.' },
  { id: 'h4', name: 'Modern Wall Clock', category: 'Home & Living', price: 599, rating: 4.3, image: 'https://images.pexels.com/photos/14976142/pexels-photo-14976142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Minimalist wall clock with a clean design. Silent quartz movement for peaceful environments.' },
  { id: 'h5', name: 'Scented Candle Set', category: 'Home & Living', price: 449, rating: 4.5, image: 'https://images.pexels.com/photos/13395697/pexels-photo-13395697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Set of aromatic scented candles with long burn time. Creates a warm and cozy atmosphere.' },
  { id: 'h6', name: 'Wooden Photo Frame', category: 'Home & Living', price: 299, rating: 4.2, image: 'https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant wooden photo frame with a natural finish. Display your cherished memories in style.' },
  { id: 'h7', name: 'Canvas Wall Art', category: 'Home & Living', price: 899, rating: 4.4, image: 'https://images.pexels.com/photos/11462538/pexels-photo-11462538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Vibrant canvas wall art print that transforms any blank wall into a focal point.' },
  { id: 'h8', name: 'Handmade Area Rug', category: 'Home & Living', price: 1999, rating: 4.6, image: 'https://images.pexels.com/photos/15896109/pexels-photo-15896109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Traditional handmade carpet with intricate patterns. Soft texture and durable weave.' },
  { id: 'h9', name: 'Kitchen Organizer Rack', category: 'Home & Living', price: 699, rating: 4.3, image: 'https://images.pexels.com/photos/4108727/pexels-photo-4108727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Modern kitchen organizer rack for neatly storing glasses, plates and supplies.' },
  { id: 'h10', name: 'Ceramic Plant Pots', category: 'Home & Living', price: 349, rating: 4.4, image: 'https://images.pexels.com/photos/35669377/pexels-photo-35669377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Decorative ceramic planters with playful designs. Perfect for small indoor plants.' },
  { id: 'h11', name: 'Inspirational Coffee Mug', category: 'Home & Living', price: 249, rating: 4.5, image: 'https://images.pexels.com/photos/9261414/pexels-photo-9261414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Ceramic coffee mug with motivational text. Start your day with a positive message.' },
  { id: 'h12', name: 'White Linen Bed Sheet', category: 'Home & Living', price: 1299, rating: 4.5, image: 'https://images.pexels.com/photos/28513849/pexels-photo-28513849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Premium white linen bed sheet set. Breathable, soft and gets better with every wash.' },
  { id: 'h13', name: 'Window Curtain Drapes', category: 'Home & Living', price: 899, rating: 4.3, image: 'https://images.pexels.com/photos/37252662/pexels-photo-37252662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant window curtains with light-filtering weave. Adds warmth and privacy to any room.' },
  { id: 'h14', name: 'Plush Bath Towel', category: 'Home & Living', price: 399, rating: 4.4, image: 'https://images.pexels.com/photos/4404976/pexels-photo-4404976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Soft and absorbent bath towel in classic white. Quick-drying and ultra-plush.' },
  { id: 'h15', name: 'Woven Storage Basket', category: 'Home & Living', price: 549, rating: 4.3, image: 'https://images.pexels.com/photos/10554836/pexels-photo-10554836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Cozy woven storage baskets for organizing linens and essentials. Minimalist home decor.' },
  { id: 'h16', name: 'Desk Organizer Set', category: 'Home & Living', price: 449, rating: 4.2, image: 'https://images.pexels.com/photos/8251060/pexels-photo-8251060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Office desk organizer with compartments for pens, sticky notes and supplies.' },
  { id: 'h17', name: 'Round Wall Mirror', category: 'Home & Living', price: 999, rating: 4.4, image: 'https://images.pexels.com/photos/29149067/pexels-photo-29149067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish sunburst round wall mirror that adds depth and character to any wall.' },
  { id: 'h18', name: 'Cozy Throw Blanket', category: 'Home & Living', price: 799, rating: 4.6, image: 'https://images.pexels.com/photos/7055750/pexels-photo-7055750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Ultra-soft patterned throw blanket for cozy evenings. Perfect for beds and sofas.' },
  { id: 'h19', name: 'Brass Incense Holder', category: 'Home & Living', price: 349, rating: 4.3, image: 'https://images.pexels.com/photos/10733080/pexels-photo-10733080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Beautifully crafted brass incense holder for a serene and spiritual ambiance at home.' },
  { id: 'h20', name: 'Ceramic Dinner Plate Set', category: 'Home & Living', price: 599, rating: 4.4, image: 'https://images.pexels.com/photos/14341984/pexels-photo-14341984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Set of elegant ceramic dinner plates with a textured finish. Dishwasher and microwave safe.' },

  // ==================== Beauty (20) ====================
  { id: 'b1', name: 'Matte Red Lipstick', category: 'Beauty', price: 299, rating: 4.6, image: 'https://images.pexels.com/photos/14839826/pexels-photo-14839826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Long-lasting matte red lipstick with a creamy, comfortable finish. Highly pigmented.' },
  { id: 'b2', name: 'Luxury Perfume', category: 'Beauty', price: 1799, rating: 4.7, image: 'https://images.pexels.com/photos/7703038/pexels-photo-7703038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'An elegant designer fragrance with notes of jasmine, vanilla and sandalwood. Long-lasting.' },
  { id: 'b3', name: 'Skincare Gift Set', category: 'Beauty', price: 999, rating: 4.5, image: 'https://images.pexels.com/photos/13095140/pexels-photo-13095140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A complete skincare set with cleanser, toner and moisturizer. Gentle for all skin types.' },
  { id: 'b4', name: 'Face Cream Moisturizer', category: 'Beauty', price: 599, rating: 4.5, image: 'https://images.pexels.com/photos/36339062/pexels-photo-36339062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Hydrating face cream with hyaluronic acid. Keeps skin moisturized and glowing all day.' },
  { id: 'b5', name: 'Colorful Nail Polish Set', category: 'Beauty', price: 349, rating: 4.4, image: 'https://images.pexels.com/photos/7066298/pexels-photo-7066298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Set of vibrant nail polish bottles in multiple shades. Long-lasting and chip-resistant.' },
  { id: 'b6', name: 'Hair Serum Pro', category: 'Beauty', price: 449, rating: 4.4, image: 'https://images.pexels.com/photos/28994388/pexels-photo-28994388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Nourishing hair serum with argan oil. Tames frizz and adds a healthy shine.' },
  { id: 'b7', name: 'Eyeshadow Palette', category: 'Beauty', price: 799, rating: 4.6, image: 'https://images.pexels.com/photos/15657763/pexels-photo-15657763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Colorful eyeshadow palette with 18 shades. Mix matte and shimmer finishes for any look.' },
  { id: 'b8', name: 'Liquid Foundation', category: 'Beauty', price: 549, rating: 4.3, image: 'https://images.pexels.com/photos/27676711/pexels-photo-27676711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Buildable coverage liquid foundation with a natural matte finish. Includes blending sponge.' },
  { id: 'b9', name: 'Face Sheet Mask Pack', category: 'Beauty', price: 399, rating: 4.5, image: 'https://images.pexels.com/photos/4760334/pexels-photo-4760334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Pack of hydrating face sheet masks for a quick spa-like treatment at home.' },
  { id: 'b10', name: 'Volumizing Mascara', category: 'Beauty', price: 299, rating: 4.4, image: 'https://images.pexels.com/photos/2688992/pexels-photo-2688992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Volumizing mascara with a precision brush. Lash-lengthening formula that lasts all day.' },
  { id: 'b11', name: 'Cocoa Body Lotion', category: 'Beauty', price: 349, rating: 4.4, image: 'https://images.pexels.com/photos/39780587/pexels-photo-39780587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Nourishing cocoa body lotion for deep moisture. Non-greasy formula with a warm scent.' },
  { id: 'b12', name: 'Hair Care Shampoo', category: 'Beauty', price: 299, rating: 4.3, image: 'https://images.pexels.com/photos/7440062/pexels-photo-7440062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Sulfate-free shampoo with conditioner for smooth, manageable hair. Gentle daily use.' },
  { id: 'b13', name: 'Hair Dryer Styling Tool', category: 'Beauty', price: 1199, rating: 4.4, image: 'https://images.pexels.com/photos/29438043/pexels-photo-29438043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Professional hair dryer with multiple heat settings and a styling nozzle for salon results.' },
  { id: 'b14', name: 'Makeup Brush Set', category: 'Beauty', price: 599, rating: 4.6, image: 'https://images.pexels.com/photos/22481931/pexels-photo-22481931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Complete set of vibrant makeup brushes for flawless application. Soft synthetic bristles.' },
  { id: 'b15', name: 'SPF 35 Sunscreen', category: 'Beauty', price: 349, rating: 4.5, image: 'https://images.pexels.com/photos/33538444/pexels-photo-33538444.png?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Broad-spectrum SPF 35 sunscreen with a lightweight, non-greasy formula. Daily sun protection.' },
  { id: 'b16', name: 'Green Tea Face Toner', category: 'Beauty', price: 299, rating: 4.3, image: 'https://images.pexels.com/photos/17658363/pexels-photo-17658363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Refreshing green tea face toner that balances pH and tightens pores. Alcohol-free formula.' },
  { id: 'b17', name: 'Green Tea Face Wash', category: 'Beauty', price: 249, rating: 4.4, image: 'https://images.pexels.com/photos/27272555/pexels-photo-27272555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Gentle green tea face wash that cleanses deeply without stripping natural oils.' },
  { id: 'b18', name: 'Concealer Stick', category: 'Beauty', price: 329, rating: 4.3, image: 'https://images.pexels.com/photos/8990726/pexels-photo-8990726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Full-coverage concealer stick that hides blemishes and dark circles. Crease-resistant.' },
  { id: 'b19', name: 'Blush Compact Powder', category: 'Beauty', price: 379, rating: 4.4, image: 'https://images.pexels.com/photos/7290670/pexels-photo-7290670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Silky blush compact with a natural flush of color. Buildable formula with a mirror.' },
  { id: 'b20', name: 'Colorful Eyeliner Pencils', category: 'Beauty', price: 299, rating: 4.3, image: 'https://images.pexels.com/photos/2517447/pexels-photo-2517447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Set of colorful eyeliner pencils for bold eye looks. Smooth-gliding and smudge-proof.' },

  // ==================== Accessories (20) ====================
  { id: 'a1', name: 'Stylish Sunglasses', category: 'Accessories', price: 599, rating: 4.4, image: 'https://images.pexels.com/photos/8989491/pexels-photo-8989491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'UV-protected stylish sunglasses with a classic aviator frame. A must-have accessory.' },
  { id: 'a2', name: 'Leather Handbag', category: 'Accessories', price: 1599, rating: 4.6, image: 'https://images.pexels.com/photos/36933384/pexels-photo-36933384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Spacious leather handbag with multiple compartments. Combines style and practicality.' },
  { id: 'a3', name: 'Premium Wallet', category: 'Accessories', price: 499, rating: 4.5, image: 'https://images.pexels.com/photos/7952556/pexels-photo-7952556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Premium leather wallet with RFID protection. Slim design with ample card slots.' },
  { id: 'a4', name: 'Classic Analog Watch', category: 'Accessories', price: 1999, rating: 4.6, image: 'https://images.pexels.com/photos/1697570/pexels-photo-1697570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Minimalist black analog watch with a sleek design. Water-resistant and versatile.' },
  { id: 'a5', name: 'Silver Necklace', category: 'Accessories', price: 899, rating: 4.5, image: 'https://images.pexels.com/photos/14579309/pexels-photo-14579309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Beautiful silver necklace with intricate design. Elegant for both casual and formal wear.' },
  { id: 'a6', name: 'Pearl Earrings', category: 'Accessories', price: 699, rating: 4.5, image: 'https://images.pexels.com/photos/9429425/pexels-photo-9429425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Classic pearl earrings that add elegance to any outfit. Hypoallergenic posts.' },
  { id: 'a7', name: 'Silk Scarf', category: 'Accessories', price: 549, rating: 4.4, image: 'https://images.pexels.com/photos/2120584/pexels-photo-2120584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Luxurious silk scarf that drapes elegantly. A versatile accessory for any season.' },
  { id: 'a8', name: 'Leather Belt', category: 'Accessories', price: 449, rating: 4.3, image: 'https://images.pexels.com/photos/35222039/pexels-photo-35222039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Genuine leather belt with a classic buckle. Durable and suitable for all occasions.' },
  { id: 'a9', name: 'Travel Backpack', category: 'Accessories', price: 1299, rating: 4.6, image: 'https://images.pexels.com/photos/33166918/pexels-photo-33166918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Durable travel backpack with padded laptop compartment and water-resistant fabric.' },
  { id: 'a10', name: 'Winter Beanie Hat', category: 'Accessories', price: 299, rating: 4.3, image: 'https://images.pexels.com/photos/37484033/pexels-photo-37484033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Knitted winter beanie hat that keeps you warm and stylish. Soft and comfortable fit.' },
  { id: 'a11', name: 'Baseball Cap', category: 'Accessories', price: 349, rating: 4.2, image: 'https://images.pexels.com/photos/31162881/pexels-photo-31162881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Classic baseball cap with adjustable strap. Sun protection with a sporty look.' },
  { id: 'a12', name: 'Handmade Bracelet', category: 'Accessories', price: 399, rating: 4.4, image: 'https://images.pexels.com/photos/14666591/pexels-photo-14666591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Handcrafted beaded bracelet with unique design. Adjustable fit for any wrist.' },
  { id: 'a13', name: 'Diamond Ring', category: 'Accessories', price: 4999, rating: 4.8, image: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Sparkling diamond ring with an elegant setting. A timeless piece for special moments.' },
  { id: 'a14', name: 'Silver Anklet', category: 'Accessories', price: 449, rating: 4.4, image: 'https://images.pexels.com/photos/7067962/pexels-photo-7067962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Delicate silver anklet with an oriental design. Adds a touch of elegance to any outfit.' },
  { id: 'a15', name: 'Canvas Tote Bag', category: 'Accessories', price: 399, rating: 4.3, image: 'https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Eco-friendly canvas tote bag, perfect for shopping and everyday use. Durable and reusable.' },
  { id: 'a16', name: 'Leather Crossbody Bag', category: 'Accessories', price: 1099, rating: 4.5, image: 'https://images.pexels.com/photos/26965805/pexels-photo-26965805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Fashionable leather crossbody bag with adjustable strap. Compact and stylish for daily use.' },
  { id: 'a17', name: 'Leather Keychain', category: 'Accessories', price: 199, rating: 4.1, image: 'https://images.pexels.com/photos/842528/pexels-photo-842528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Premium leather keychain with a sturdy ring. A small accessory that makes a big difference.' },
  { id: 'a18', name: 'Floral Headband', category: 'Accessories', price: 249, rating: 4.2, image: 'https://images.pexels.com/photos/20189822/pexels-photo-20189822.png?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant floral headband perfect for festivals and special occasions. Comfortable and lightweight.' },
  { id: 'a19', name: 'Vintage Brooch Pin', category: 'Accessories', price: 349, rating: 4.3, image: 'https://images.pexels.com/photos/30755639/pexels-photo-30755639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Assorted vintage brooch pins that add a touch of retro charm to jackets and scarves.' },
  { id: 'a20', name: 'Designer Phone Case', category: 'Accessories', price: 399, rating: 4.4, image: 'https://images.pexels.com/photos/207289/pexels-photo-207289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish designer phone case with textured back cover. Shock-absorbing protection.' },
];

const CATEGORIES = [
  { name: 'Fashion', emoji: '👗', gradient: 'linear-gradient(135deg, #ff5e62, #ff9966)' },
  { name: 'Electronics', emoji: '🎧', gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
  { name: 'Home & Living', emoji: '🛋️', gradient: 'linear-gradient(135deg, #00cec9, #55efc4)' },
  { name: 'Beauty', emoji: '💄', gradient: 'linear-gradient(135deg, #fd79a8, #fdcb6e)' },
  { name: 'Accessories', emoji: '👜', gradient: 'linear-gradient(135deg, #e17055, #fdcb6e)' },
];

const COUPONS = {
  SAVE10: { type: 'percent', value: 10, label: '10% off' },
  WELCOME50: { type: 'flat', value: 50, label: 'Rs. 50 off' },
};

const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23e1e4e8"%3E%3Crect width="400" height="300"/%3E%3Ctext x="200" y="155" font-size="18" text-anchor="middle" fill="%23a0a4a8"%3ENo Image%3C/text%3E%3C/svg%3E';

const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
  'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar Islands','Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry',
];

/* ========================================
   2. STATE & PERSISTENCE (localStorage)
   ======================================== */
const STORAGE_KEYS = {
  cart: 'colorpop_cart',
  wishlist: 'colorpop_wishlist',
  orders: 'colorpop_orders',
};

let cart = [];
let wishlist = [];
let orders = [];
let appliedCoupon = null;
let currentFilter = { search: '', category: 'all', sort: 'default' };

function loadState() {
  try {
    cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart)) || [];
    wishlist = JSON.parse(localStorage.getItem(STORAGE_KEYS.wishlist)) || [];
    orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.orders)) || [];
  } catch (e) {
    cart = []; wishlist = []; orders = [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}
function saveWishlist() {
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist));
}
function saveOrders() {
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
}

/* ========================================
   3. UTILITY FUNCTIONS
   ======================================== */
function formatPrice(amount) {
  return 'Rs. ' + Math.round(amount).toLocaleString('en-IN');
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function showToast(message, type) {
  type = type || 'info';
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(function () {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 3000);
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function generateOrderId() {
  return 'CP' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 100).toString().padStart(2, '0');
}

function starRating(rating) {
  var full = Math.floor(rating);
  var half = rating % 1 >= 0.5;
  var stars = '';
  for (var i = 0; i < full; i++) stars += '★';
  if (half) stars += '☆';
  for (var i = full + (half ? 1 : 0); i < 5; i++) stars += '☆';
  return stars + ' ' + rating.toFixed(1);
}

function imgWithFallback(url) {
  return url || PLACEHOLDER_IMG;
}

/* ========================================
   4. DOM REFERENCES
   ======================================== */
var els = {};

function cacheElements() {
  els = {
    productGrid: document.getElementById('productGrid'),
    noResults: document.getElementById('noResults'),
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    sortSelect: document.getElementById('sortSelect'),
    categoryGrid: document.getElementById('categoryGrid'),
    cartBadge: document.getElementById('cartBadge'),
    wishlistBadge: document.getElementById('wishlistBadge'),
    cartBtn: document.getElementById('cartBtn'),
    wishlistBtn: document.getElementById('wishlistBtn'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartClose: document.getElementById('cartClose'),
    cartItems: document.getElementById('cartItems'),
    cartFooter: document.getElementById('cartFooter'),
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    wishlistOverlay: document.getElementById('wishlistOverlay'),
    wishlistClose: document.getElementById('wishlistClose'),
    wishlistItems: document.getElementById('wishlistItems'),
    quickViewModal: document.getElementById('quickViewModal'),
    qvBody: document.getElementById('qvBody'),
    qvClose: document.getElementById('qvClose'),
    checkoutModal: document.getElementById('checkoutModal'),
    checkoutClose: document.getElementById('checkoutClose'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutSummary: document.getElementById('checkoutSummary'),
    confirmModal: document.getElementById('confirmModal'),
    confirmText: document.getElementById('confirmText'),
    confirmOk: document.getElementById('confirmOk'),
    ordersList: document.getElementById('ordersList'),
    hamburger: document.getElementById('hamburger'),
    navLinks: document.getElementById('navLinks'),
    navbar: document.getElementById('navbar'),
  };
}

/* ========================================
   5. RENDER FUNCTIONS
   ======================================== */

// --- Categories ---
function renderCategories() {
  els.categoryGrid.innerHTML = CATEGORIES.map(function (cat) {
    var count = PRODUCTS.filter(function (p) { return p.category === cat.name; }).length;
    return (
      '<div class="category-card" style="background:' + cat.gradient + '" data-cat="' + escapeHtml(cat.name) + '">' +
        '<span class="category-emoji">' + cat.emoji + '</span>' +
        '<span class="category-name">' + escapeHtml(cat.name) + '</span>' +
        '<span class="category-count">' + count + ' products</span>' +
      '</div>'
    );
  }).join('');

  els.categoryGrid.querySelectorAll('.category-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var cat = card.getAttribute('data-cat');
      els.categoryFilter.value = cat;
      currentFilter.category = cat;
      renderProducts();
      closeMobileMenu();
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// --- Products ---
function getFilteredProducts() {
  var list = PRODUCTS.slice();

  // Search
  if (currentFilter.search) {
    var q = currentFilter.search.toLowerCase();
    list = list.filter(function (p) {
      return p.name.toLowerCase().indexOf(q) !== -1 || p.category.toLowerCase().indexOf(q) !== -1;
    });
  }

  // Category
  if (currentFilter.category !== 'all') {
    list = list.filter(function (p) { return p.category === currentFilter.category; });
  }

  // Sort
  switch (currentFilter.sort) {
    case 'price-low': list.sort(function (a, b) { return a.price - b.price; }); break;
    case 'price-high': list.sort(function (a, b) { return b.price - a.price; }); break;
    case 'name-az': list.sort(function (a, b) { return a.name.localeCompare(b.name); }); break;
    case 'name-za': list.sort(function (a, b) { return b.name.localeCompare(a.name); }); break;
  }

  return list;
}

function renderProducts() {
  var list = getFilteredProducts();

  if (list.length === 0) {
    els.productGrid.innerHTML = '';
    els.noResults.hidden = false;
    return;
  }
  els.noResults.hidden = true;

  els.productGrid.innerHTML = list.map(function (p, idx) {
    var inWishlist = wishlist.indexOf(p.id) !== -1;
    return (
      '<article class="product-card" style="animation-delay:' + (idx * 0.05) + 's">' +
        '<div class="product-img-wrap">' +
          '<span class="product-cat-tag">' + escapeHtml(p.category) + '</span>' +
          '<button class="wishlist-toggle ' + (inWishlist ? 'active' : '') + '" data-wish="' + p.id + '" aria-label="Toggle wishlist">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="' + (inWishlist ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
          '</button>' +
          '<img src="' + imgWithFallback(p.image) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" onerror="this.src=\'' + PLACEHOLDER_IMG + '\'" />' +
          '<button class="quick-view-btn" data-qv="' + p.id + '">Quick View</button>' +
        '</div>' +
        '<div class="product-info">' +
          '<span class="product-cat-label">' + escapeHtml(p.category) + '</span>' +
          '<h3 class="product-name">' + escapeHtml(p.name) + '</h3>' +
          '<span class="product-rating">' + starRating(p.rating) + '</span>' +
          '<span class="product-price">' + formatPrice(p.price) + '</span>' +
        '</div>' +
        '<button class="product-add-btn" data-add="' + p.id + '">' +
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
          'Add to Cart' +
        '</button>' +
      '</article>'
    );
  }).join('');

  // Attach listeners
  els.productGrid.querySelectorAll('[data-add]').forEach(function (btn) {
    btn.addEventListener('click', function () { addToCart(btn.getAttribute('data-add')); });
  });
  els.productGrid.querySelectorAll('[data-qv]').forEach(function (btn) {
    btn.addEventListener('click', function () { openQuickView(btn.getAttribute('data-qv')); });
  });
  els.productGrid.querySelectorAll('[data-wish]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleWishlist(btn.getAttribute('data-wish'));
    });
  });
}

// --- Badges ---
function renderBadges() {
  var cartCount = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
  els.cartBadge.textContent = cartCount;
  els.cartBadge.classList.toggle('hidden', cartCount === 0);

  els.wishlistBadge.textContent = wishlist.length;
  els.wishlistBadge.classList.toggle('hidden', wishlist.length === 0);
}

// --- Cart ---
function renderCart() {
  if (cart.length === 0) {
    els.cartItems.innerHTML =
      '<div class="empty-state">' +
        '<div class="empty-icon">🛒</div>' +
        '<h3>Your cart is empty</h3>' +
        '<p>Add some colorful products to get started!</p>' +
      '</div>';
    els.cartFooter.innerHTML = '';
    return;
  }

  els.cartItems.innerHTML = cart.map(function (item) {
    var p = getProductById(item.id);
    if (!p) return '';
    return (
      '<div class="cart-item">' +
        '<img class="cart-item-img" src="' + imgWithFallback(p.image) + '" alt="' + escapeHtml(p.name) + '" onerror="this.src=\'' + PLACEHOLDER_IMG + '\'" />' +
        '<div class="cart-item-info">' +
          '<span class="cart-item-name">' + escapeHtml(p.name) + '</span>' +
          '<span class="cart-item-price">' + formatPrice(p.price) + '</span>' +
          '<div class="qty-controls">' +
            '<button class="qty-btn" data-dec="' + p.id + '" aria-label="Decrease quantity">−</button>' +
            '<span class="qty-num">' + item.qty + '</span>' +
            '<button class="qty-btn" data-inc="' + p.id + '" aria-label="Increase quantity">+</button>' +
          '</div>' +
        '</div>' +
        '<button class="cart-item-remove" data-rem="' + p.id + '" aria-label="Remove item">' +
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' +
        '</button>' +
      '</div>'
    );
  }).join('');

  // Attach listeners
  els.cartItems.querySelectorAll('[data-inc]').forEach(function (btn) {
    btn.addEventListener('click', function () { changeQty(btn.getAttribute('data-inc'), 1); });
  });
  els.cartItems.querySelectorAll('[data-dec]').forEach(function (btn) {
    btn.addEventListener('click', function () { changeQty(btn.getAttribute('data-dec'), -1); });
  });
  els.cartItems.querySelectorAll('[data-rem]').forEach(function (btn) {
    btn.addEventListener('click', function () { removeFromCart(btn.getAttribute('data-rem')); });
  });

  renderCartFooter();
}

function calculateTotals() {
  var subtotal = cart.reduce(function (sum, item) {
    var p = getProductById(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  var discount = 0;
  if (appliedCoupon && COUPONS[appliedCoupon]) {
    var coupon = COUPONS[appliedCoupon];
    if (coupon.type === 'percent') {
      discount = Math.round(subtotal * coupon.value / 100);
    } else {
      discount = Math.min(coupon.value, subtotal);
    }
  }

  var shipping = subtotal > 0 ? 49 : 0;
  if (subtotal - discount >= 2000) shipping = 0;
  var total = subtotal - discount + shipping;

  return { subtotal: subtotal, discount: discount, shipping: shipping, total: total };
}

function renderCartFooter() {
  var totals = calculateTotals();

  els.cartFooter.innerHTML =
    '<div class="coupon-row">' +
      '<input type="text" id="couponInput" placeholder="Coupon code" value="' + (appliedCoupon || '') + '" />' +
      '<button id="applyCouponBtn">Apply</button>' +
    '</div>' +
    '<div id="couponMsg" class="coupon-msg ' + (appliedCoupon ? 'success' : 'hidden') + '">' +
      (appliedCoupon ? 'Coupon "' + appliedCoupon + '" applied — ' + COUPONS[appliedCoupon].label : '') +
    '</div>' +
    '<div class="cart-totals">' +
      '<div class="total-row"><span>Subtotal</span><span>' + formatPrice(totals.subtotal) + '</span></div>' +
      (totals.discount > 0 ? '<div class="total-row discount"><span>Discount</span><span>−' + formatPrice(totals.discount) + '</span></div>' : '') +
      '<div class="total-row"><span>Shipping</span><span>' + (totals.shipping === 0 ? 'FREE' : formatPrice(totals.shipping)) + '</span></div>' +
      '<div class="total-row grand"><span>Total</span><span>' + formatPrice(totals.total) + '</span></div>' +
    '</div>' +
    '<button class="btn btn-primary btn-block btn-lg" id="checkoutBtn">Proceed to Checkout</button>';

  document.getElementById('applyCouponBtn').addEventListener('click', applyCoupon);
  document.getElementById('couponInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); applyCoupon(); }
  });
  document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
}

// --- Wishlist ---
function renderWishlist() {
  if (wishlist.length === 0) {
    els.wishlistItems.innerHTML =
      '<div class="empty-state">' +
        '<div class="empty-icon">❤️</div>' +
        '<h3>Your wishlist is empty</h3>' +
        '<p>Tap the heart icon on any product to save it here.</p>' +
      '</div>';
    return;
  }

  els.wishlistItems.innerHTML = wishlist.map(function (id) {
    var p = getProductById(id);
    if (!p) return '';
    return (
      '<div class="wishlist-item">' +
        '<img src="' + imgWithFallback(p.image) + '" alt="' + escapeHtml(p.name) + '" onerror="this.src=\'' + PLACEHOLDER_IMG + '\'" />' +
        '<div class="wishlist-item-info">' +
          '<span class="wishlist-item-name">' + escapeHtml(p.name) + '</span>' +
          '<span class="wishlist-item-price">' + formatPrice(p.price) + '</span>' +
        '</div>' +
        '<div class="wishlist-item-actions">' +
          '<button class="btn btn-primary btn-sm" data-wish-add="' + p.id + '">Add to Cart</button>' +
          '<button class="btn btn-ghost btn-sm" data-wish-rem="' + p.id + '">Remove</button>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  els.wishlistItems.querySelectorAll('[data-wish-add]').forEach(function (btn) {
    btn.addEventListener('click', function () { addToCart(btn.getAttribute('data-wish-add')); });
  });
  els.wishlistItems.querySelectorAll('[data-wish-rem]').forEach(function (btn) {
    btn.addEventListener('click', function () { toggleWishlist(btn.getAttribute('data-wish-rem')); });
  });
}

// --- Orders ---
function renderOrders() {
  if (orders.length === 0) {
    els.ordersList.innerHTML =
      '<div class="empty-state">' +
        '<div class="empty-icon">📦</div>' +
        '<h3>No orders yet</h3>' +
        '<p>When you place an order, it will show up here.</p>' +
      '</div>';
    return;
  }

  els.ordersList.innerHTML = orders.slice().reverse().map(function (order) {
    var itemsHtml = order.items.map(function (item) {
      return '<div class="order-item-row"><span>' + escapeHtml(item.name) + ' ×' + item.qty + '</span><span>' + formatPrice(item.price * item.qty) + '</span></div>';
    }).join('');

    return (
      '<div class="order-card">' +
        '<div class="order-header">' +
          '<span class="order-id">' + order.id + '</span>' +
          '<span class="order-status">✓ Delivered</span>' +
        '</div>' +
        '<div class="order-date">' + order.date + '</div>' +
        '<div class="order-items-list">' + itemsHtml + '</div>' +
        '<div class="order-total-row"><span>Total Paid</span><span>' + formatPrice(order.total) + '</span></div>' +
      '</div>'
    );
  }).join('');
}

/* ========================================
   6. CART OPERATIONS
   ======================================== */
function addToCart(id) {
  var existing = cart.find(function (item) { return item.id === id; });
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: id, qty: 1 });
  }
  saveCart();
  renderBadges();
  renderCart();
  var p = getProductById(id);
  showToast((p ? p.name : 'Item') + ' added to cart', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(function (item) { return item.id !== id; });
  saveCart();
  renderBadges();
  renderCart();
  showToast('Item removed from cart', 'info');
}

function changeQty(id, delta) {
  var item = cart.find(function (i) { return i.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  renderBadges();
  renderCart();
}

/* ========================================
   7. WISHLIST OPERATIONS
   ======================================== */
function toggleWishlist(id) {
  var idx = wishlist.indexOf(id);
  if (idx !== -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist', 'success');
  }
  saveWishlist();
  renderBadges();
  renderWishlist();
  renderProducts();
}

/* ========================================
   8. COUPON LOGIC
   ======================================== */
function applyCoupon() {
  var input = document.getElementById('couponInput');
  if (!input) return;
  var code = input.value.trim().toUpperCase();

  if (!code) {
    appliedCoupon = null;
    renderCart();
    return;
  }

  if (COUPONS[code]) {
    if (appliedCoupon === code) {
      showToast('Coupon already applied', 'info');
      return;
    }
    appliedCoupon = code;
    showToast('Coupon "' + code + '" applied!', 'success');
    renderCart();
  } else {
    appliedCoupon = null;
    renderCart();
    var msgEl = document.getElementById('couponMsg');
    if (msgEl) {
      msgEl.className = 'coupon-msg error';
      msgEl.textContent = 'Invalid coupon code. Try SAVE10 or WELCOME50.';
    }
    showToast('Invalid coupon code', 'error');
  }
}

/* ========================================
   9. QUICK VIEW MODAL
   ======================================== */
function openQuickView(id) {
  var p = getProductById(id);
  if (!p) return;
  var inWishlist = wishlist.indexOf(p.id) !== -1;

  els.qvBody.innerHTML =
    '<img class="qv-img" src="' + imgWithFallback(p.image) + '" alt="' + escapeHtml(p.name) + '" onerror="this.src=\'' + PLACEHOLDER_IMG + '\'" />' +
    '<div class="qv-info">' +
      '<span class="qv-cat">' + escapeHtml(p.category) + '</span>' +
      '<h3 class="qv-name">' + escapeHtml(p.name) + '</h3>' +
      '<span class="qv-rating">' + starRating(p.rating) + '</span>' +
      '<span class="qv-price">' + formatPrice(p.price) + '</span>' +
      '<p class="qv-desc">' + escapeHtml(p.desc) + '</p>' +
      '<div class="qv-actions">' +
        '<button class="btn btn-primary" id="qvAddBtn">Add to Cart</button>' +
        '<button class="btn btn-ghost" id="qvWishBtn">' + (inWishlist ? 'In Wishlist ♥' : 'Add to Wishlist') + '</button>' +
      '</div>' +
    '</div>';

  els.quickViewModal.hidden = false;
  document.body.classList.add('no-scroll');

  document.getElementById('qvAddBtn').addEventListener('click', function () {
    addToCart(p.id);
    closeModal(els.quickViewModal);
  });
  document.getElementById('qvWishBtn').addEventListener('click', function () {
    toggleWishlist(p.id);
    openQuickView(p.id);
  });
}

/* ========================================
   10. CHECKOUT
   ======================================== */
function openCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }

  var totals = calculateTotals();

  els.checkoutSummary.innerHTML =
    '<div class="total-row"><span>Subtotal</span><span>' + formatPrice(totals.subtotal) + '</span></div>' +
    (totals.discount > 0 ? '<div class="total-row discount"><span>Discount</span><span>−' + formatPrice(totals.discount) + '</span></div>' : '') +
    '<div class="total-row"><span>Shipping</span><span>' + (totals.shipping === 0 ? 'FREE' : formatPrice(totals.shipping)) + '</span></div>' +
    '<div class="total-row grand"><span>Total</span><span>' + formatPrice(totals.total) + '</span></div>';

  els.checkoutModal.hidden = false;
  document.body.classList.add('no-scroll');
}

function closeCheckout() {
  closeModal(els.checkoutModal);
  els.checkoutForm.reset();
  clearFormErrors();
}

function clearFormErrors() {
  var errorSpans = els.checkoutForm.querySelectorAll('.error-msg');
  errorSpans.forEach(function (s) { s.textContent = ''; });
  var inputs = els.checkoutForm.querySelectorAll('input, textarea');
  inputs.forEach(function (i) { i.classList.remove('invalid'); });
}

function validateField(name, value) {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Please enter your full name';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) return 'Name contains invalid characters';
      return '';
    case 'email':
      if (!value.trim()) return 'Please enter your email';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address';
      return '';
    case 'phone':
      if (!value.trim()) return 'Please enter your phone number';
      var phone = value.trim().replace(/[\s-]/g, '');
      if (phone.length > 10) {
        phone = phone.replace(/^\+91/, '').replace(/^91/, '').replace(/^0/, '');
      }
      if (!/^[6-9]\d{9}$/.test(phone)) {
        return 'Enter a valid 10-digit Indian mobile number (starts with 6, 7, 8 or 9)';
      }
      return '';
    case 'address':
      if (!value.trim()) return 'Please enter your address';
      if (value.trim().length < 10) return 'Address seems too short';
      return '';
    case 'city':
      if (!value.trim()) return 'Please enter your city';
      if (value.trim().length < 2) return 'City name is too short';
      return '';
    case 'state':
      if (!value.trim()) return 'Please enter your state';
      return '';
    case 'pin':
      if (!value.trim()) return 'Please enter your PIN code';
      if (!/^\d{6}$/.test(value.trim())) return 'PIN code must be exactly 6 digits';
      return '';
    default:
      return '';
  }
}

function validateForm() {
  var fields = ['name', 'email', 'phone', 'address', 'city', 'state', 'pin'];
  var isValid = true;

  fields.forEach(function (name) {
    var input = document.getElementById('co' + name.charAt(0).toUpperCase() + name.slice(1));
    var errorEl = document.getElementById('err' + name.charAt(0).toUpperCase() + name.slice(1));
    if (!input || !errorEl) return;

    var error = validateField(name, input.value);
    if (error) {
      errorEl.textContent = error;
      input.classList.add('invalid');
      isValid = false;
    } else {
      errorEl.textContent = '';
      input.classList.remove('invalid');
    }
  });

  return isValid;
}

function placeOrder(e) {
  e.preventDefault();

  if (!validateForm()) {
    showToast('Please fix the errors in the form', 'error');
    // Focus first invalid field
    var firstInvalid = els.checkoutForm.querySelector('.invalid');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  var totals = calculateTotals();
  var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  var paymentLabels = { cod: 'Cash on Delivery', upi: 'UPI (Demo)', card: 'Card (Demo)' };

  var order = {
    id: generateOrderId(),
    date: new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    items: cart.map(function (item) {
      var p = getProductById(item.id);
      return { name: p ? p.name : 'Unknown', qty: item.qty, price: p ? p.price : 0 };
    }),
    total: totals.total,
    subtotal: totals.subtotal,
    discount: totals.discount,
    shipping: totals.shipping,
    coupon: appliedCoupon,
    payment: paymentLabels[paymentMethod],
    customer: {
      name: document.getElementById('coName').value.trim(),
      email: document.getElementById('coEmail').value.trim(),
      phone: document.getElementById('coPhone').value.trim(),
      address: document.getElementById('coAddress').value.trim(),
      city: document.getElementById('coCity').value.trim(),
      state: document.getElementById('coState').value.trim(),
      pin: document.getElementById('coPin').value.trim(),
    },
  };

  orders.push(order);
  saveOrders();

  // Clear cart
  cart = [];
  appliedCoupon = null;
  saveCart();
  renderBadges();
  renderCart();
  renderOrders();

  closeCheckout();
  showConfirmation(order);
}

function showConfirmation(order) {
  els.confirmText.innerHTML =
    'Order <strong>' + order.id + '</strong> has been placed successfully.<br>' +
    'Total: <strong>' + formatPrice(order.total) + '</strong> via ' + escapeHtml(order.payment) + '.';
  els.confirmModal.hidden = false;
  document.body.classList.add('no-scroll');
}

/* ========================================
   11. MODAL/DRAWER HELPERS
   ======================================== */
function closeModal(modalEl) {
  modalEl.hidden = true;
  if (!isAnyOverlayOpen()) {
    document.body.classList.remove('no-scroll');
  }
}

function openDrawer(drawerEl, overlayEl) {
  drawerEl.hidden = false;
  overlayEl.hidden = false;
  document.body.classList.add('no-scroll');
}

function closeDrawer(drawerEl, overlayEl) {
  drawerEl.hidden = true;
  overlayEl.hidden = true;
  if (!isAnyOverlayOpen()) {
    document.body.classList.remove('no-scroll');
  }
}

function isAnyOverlayOpen() {
  return !els.quickViewModal.hidden || !els.checkoutModal.hidden || !els.confirmModal.hidden ||
    !els.cartDrawer.hidden || !els.wishlistDrawer.hidden;
}

/* ========================================
   12. MOBILE MENU
   ======================================== */
function toggleMobileMenu() {
  var isOpen = els.navLinks.classList.toggle('open');
  els.hamburger.classList.toggle('open', isOpen);
  els.hamburger.setAttribute('aria-expanded', isOpen);
}

function closeMobileMenu() {
  els.navLinks.classList.remove('open');
  els.hamburger.classList.remove('open');
  els.hamburger.setAttribute('aria-expanded', 'false');
}

/* ========================================
   13. NAV SCROLL & ACTIVE SECTION
   ======================================== */
function handleNavScroll() {
  if (window.scrollY > 10) {
    els.navbar.classList.add('scrolled');
  } else {
    els.navbar.classList.remove('scrolled');
  }
}

function updateActiveNav() {
  var sections = ['home', 'shop', 'categories', 'orders', 'about'];
  var scrollPos = window.scrollY + 100;
  var current = 'home';

  sections.forEach(function (id) {
    var el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) {
      current = id;
    }
  });

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('data-nav') === current);
  });
}

/* ========================================
   14. EVENT BINDINGS
   ======================================== */
function bindEvents() {
  // Search
  els.searchInput.addEventListener('input', function () {
    currentFilter.search = els.searchInput.value;
    renderProducts();
  });

  // Category filter
  els.categoryFilter.addEventListener('change', function () {
    currentFilter.category = els.categoryFilter.value;
    renderProducts();
  });

  // Sort
  els.sortSelect.addEventListener('change', function () {
    currentFilter.sort = els.sortSelect.value;
    renderProducts();
  });

  // Cart drawer
  els.cartBtn.addEventListener('click', function () { openDrawer(els.cartDrawer, els.cartOverlay); renderCart(); });
  els.cartClose.addEventListener('click', function () { closeDrawer(els.cartDrawer, els.cartOverlay); });
  els.cartOverlay.addEventListener('click', function () { closeDrawer(els.cartDrawer, els.cartOverlay); });

  // Wishlist drawer
  els.wishlistBtn.addEventListener('click', function () { openDrawer(els.wishlistDrawer, els.wishlistOverlay); renderWishlist(); });
  els.wishlistClose.addEventListener('click', function () { closeDrawer(els.wishlistDrawer, els.wishlistOverlay); });
  els.wishlistOverlay.addEventListener('click', function () { closeDrawer(els.wishlistDrawer, els.wishlistOverlay); });

  // Quick view
  els.qvClose.addEventListener('click', function () { closeModal(els.quickViewModal); });
  els.quickViewModal.addEventListener('click', function (e) {
    if (e.target === els.quickViewModal) closeModal(els.quickViewModal);
  });

  // Checkout
  els.checkoutClose.addEventListener('click', closeCheckout);
  els.checkoutModal.addEventListener('click', function (e) {
    if (e.target === els.checkoutModal) closeCheckout();
  });
  els.checkoutForm.addEventListener('submit', placeOrder);

  // Real-time validation
  ['coName', 'coEmail', 'coPhone', 'coAddress', 'coCity', 'coState', 'coPin'].forEach(function (inputId) {
    var input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('blur', function () {
      var fieldName = inputId.replace('co', '').toLowerCase();
      var error = validateField(fieldName, input.value);
      var errorEl = document.getElementById('err' + fieldName.charAt(0).toUpperCase() + fieldName.slice(1));
      if (error) {
        errorEl.textContent = error;
        input.classList.add('invalid');
      } else {
        errorEl.textContent = '';
        input.classList.remove('invalid');
      }
    });
    input.addEventListener('input', function () {
      if (input.classList.contains('invalid')) {
        var fieldName = inputId.replace('co', '').toLowerCase();
        var error = validateField(fieldName, input.value);
        var errorEl = document.getElementById('err' + fieldName.charAt(0).toUpperCase() + fieldName.slice(1));
        if (!error) {
          errorEl.textContent = '';
          input.classList.remove('invalid');
        }
      }
    });
  });

  // Confirmation
  els.confirmOk.addEventListener('click', function () { closeModal(els.confirmModal); });
  els.confirmModal.addEventListener('click', function (e) {
    if (e.target === els.confirmModal) closeModal(els.confirmModal);
  });

  // Hamburger
  els.hamburger.addEventListener('click', toggleMobileMenu);
  els.navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Scroll
  window.addEventListener('scroll', function () {
    handleNavScroll();
    updateActiveNav();
  });

  // Escape key closes overlays
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (!els.quickViewModal.hidden) closeModal(els.quickViewModal);
      if (!els.checkoutModal.hidden) closeCheckout();
      if (!els.confirmModal.hidden) closeModal(els.confirmModal);
      if (!els.cartDrawer.hidden) closeDrawer(els.cartDrawer, els.cartOverlay);
      if (!els.wishlistDrawer.hidden) closeDrawer(els.wishlistDrawer, els.wishlistOverlay);
      closeMobileMenu();
    }
  });
}

/* ========================================
   15. INIT
   ======================================== */
function init() {
  loadState();
  cacheElements();
  renderCategories();
  renderProducts();
  renderBadges();
  renderOrders();
  bindEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
