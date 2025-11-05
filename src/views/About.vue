<template>
  <div class="page-container">
    <!-- Header Section -->
    <header class="header">
      <h1 class="title">Journeys Through the Soul of China</h1>
      <p class="subtitle">Explore Nature & Culture</p>
    </header>

    <!-- Image Section -->
    <section class="image-section">
      <div class="image-item">
        <img src="https://via.placeholder.com/400x300" alt="Sichuan" />
        <p>Sichuan</p>
      </div>
      <div class="image-item">
        <img src="https://via.placeholder.com/400x300" alt="Chongqing" />
        <p>Chongqing</p>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="culture-section">
      <h2>Savor the Land and Culture</h2>
      <div class="culture-images">
        <div class="culture-item">
          <img src="https://via.placeholder.com/400x300" alt="Cultural Image" />
          <p>Autumn Colors & Ancient Capitals</p>
        </div>
        <div class="culture-item">
          <img src="https://via.placeholder.com/400x300" alt="Cultural Image" />
          <p>Scenic Journey Through Mountains & Countryside China</p>
        </div>
      </div>
      <button class="explore-btn">Explore More</button>
    </section>

    <!-- About Us Section -->
    <section class="about-us">
      <h2>About Us</h2>
      <div class="about-us-images">
        <div class="about-us-item">
          <img src="https://via.placeholder.com/400x300" alt="Local Experts" />
          <p>Authentic experiences led by local experts</p>
        </div>
        <div class="about-us-item">
          <img src="https://via.placeholder.com/400x300" alt="Tailor-Made Trips" />
          <p>Tailor-made itineraries for discerning travelers</p>
        </div>
        <div class="about-us-item">
          <img src="https://via.placeholder.com/400x300" alt="Seasonal Service" />
          <p>Seasonal service</p>
        </div>
      </div>
    </section>

    <!-- Meet Our Local Experts Section -->
    <section class="local-experts">
      <h2>Meet Our Local Experts</h2>
      <div class="experts">
        <div class="expert-item">
          <img src="https://via.placeholder.com/400x300" alt="Expert 1" />
          <p>Rosa Chen</p>
          <p>Tourist guide in Sichuan, China</p>
        </div>
        <div class="expert-item">
          <img src="https://via.placeholder.com/400x300" alt="Expert 2" />
          <p>Wayne Wang</p>
          <p>Expert in ancient cultures and mountain trekking</p>
        </div>
        <div class="expert-item">
          <img src="https://via.placeholder.com/400x300" alt="Expert 3" />
          <p>Eva Zhang</p>
          <p>Outdoor adventure specialist</p>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-left">
        <p>Address: 1234, Lane 9, T.S.T, Hong Kong</p>
        <div class="social-icons">
          <a href="#" class="social-icon">FB</a>
          <a href="#" class="social-icon">IG</a>
          <a href="#" class="social-icon">TW</a>
        </div>
      </div>
      <div class="footer-right">
        <img src="https://via.placeholder.com/150x150" alt="QR Code" />
      </div>
    </footer>
  </div>
</template>

<script setup>
// No JavaScript logic needed for this structure
</script>

<style scoped>
.page-container {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  text-align: center;
  margin: 50px 0;
}

.title {
  font-size: 48px;
  font-weight: bold;
}

.subtitle {
  font-size: 20px;
  color: #555;
}

.image-section {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.image-item {
  text-align: center;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.culture-section {
  text-align: center;
  margin: 50px 0;
}

.culture-images {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.culture-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.explore-btn {
  background-color: #1e88e5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
}

.about-us {
  text-align: center;
  margin: 50px 0;
}

.about-us-images {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.about-us-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.local-experts {
  text-align: center;
  margin: 50px 0;
}

.experts {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.expert-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;
}

.footer-left p {
  margin: 0;
  font-size: 14px;
}

.social-icons {
  margin-top: 10px;
}

.social-icon {
  margin-right: 10px;
  font-size: 18px;
  text-decoration: none;
  color: #333;
}

.footer-right img {
  width: 150px;
  height: 150px;
}
</style>