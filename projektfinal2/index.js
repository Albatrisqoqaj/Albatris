// Simple cart example (can be expanded)
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart! Total items: ${cart.length}`);
}

<script>
  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }
</script>
