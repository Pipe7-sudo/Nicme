const button= document.getElementById('addToCartBtn')

button.addEventListener('click', function() {
   
    if (!document.getElementById('wishlistMessage')) {
        
        var messageDiv = document.createElement('div');
        
        messageDiv.className = 'alert alert-success mt-3';
        messageDiv.id = 'wishlistMessage';
        messageDiv.textContent = 'Added to Wishlist!'
        this.parentNode.appendChild(messageDiv);
    }
});
document.getElementById('addToCartBtn').addEventListener('click', function() {
    var messageDiv = document.getElementById('wishlistMessage');

    if (messageDiv.style.display === 'none' || messageDiv.style.display === '') {
       
        messageDiv.style.display = 'block';
        this.innerHTML = '<i class="fas fa-heart-broken"></i> Remove from Wishlist';
        this.classList.remove('btn-primary');
        this.classList.add('btn-danger');
        messageDiv.textContent = 'Added to Wishlist!';
    } else {
       
        messageDiv.style.display = 'none';
        this.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
        this.classList.remove('btn-danger');
        this.classList.add('btn-primary');
        messageDiv.textContent = 'Removed from Wishlist!';
    }
});
