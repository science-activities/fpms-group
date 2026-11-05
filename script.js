document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    // Function to add a new message to the chat
    function addMessage(text, type = 'sent') {
        if (!text.trim()) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;

        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'bubble';
        bubbleDiv.textContent = text;

        messageDiv.appendChild(bubbleDiv);
        chatMessages.appendChild(messageDiv);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Listen for Enter key on the input field
    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const text = this.value;
            addMessage(text, 'sent');
            this.value = '';
            
            // Simulate a reply after 1 second for demonstration
            setTimeout(() => {
                const replies = ["Cool!", "That's interesting.", "Tell me more.", "Haha yeah.", "👍"];
                const randomReply = replies[Math.floor(Math.random() * replies.length)];
                addMessage(randomReply, 'received');
            }, 1000);
        }
    });
});
