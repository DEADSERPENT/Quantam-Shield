'use client';

import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('getting-started');

  const docs = [
    {
      id: 'getting-started',
      category: 'Getting Started',
      items: [
        {
          title: 'Quick Start Guide',
          desc: 'Get up and running with QuantumShield in 5 minutes',
          content: `
# Quick Start Guide

Welcome to QuantumShield! This guide will get you up and running in just 5 minutes.

## Step 1: Unbox Your Device
- Remove your QuantumShield device from the packaging
- Inspect the device for any physical damage
- Locate the USB-C connector

## Step 2: Install Desktop Application
1. Download the QuantumShield Desktop app from our Downloads page
2. Run the installer for your operating system
3. Follow the on-screen instructions

## Step 3: Initial Setup
1. Insert your QuantumShield device into a USB port
2. Launch the QuantumShield Desktop application
3. Follow the setup wizard to:
   - Create a secure PIN (6-8 digits recommended)
   - Set up biometric authentication (if supported)
   - Generate your first quantum-safe key pair

## Step 4: First Authentication
Try your first authentication:
- Visit a WebAuthn-enabled site
- Select "Sign in with security key"
- Tap your QuantumShield device when prompted

## Troubleshooting
Device not detected?
- Try a different USB port
- Ensure USB drivers are up to date
- Check Device Manager (Windows) or System Information (macOS)

PIN not working?
- Wait 30 seconds between attempts
- After 8 failed attempts, device will reset
          `
        },
        {
          title: 'Installation',
          desc: 'Platform-specific installation instructions for all supported systems',
          content: `
# Installation Guide

## Windows Installation (Windows 10/11)

### System Requirements
- Windows 10 (64-bit) or later
- 4 GB RAM minimum
- 500 MB free disk space
- USB 2.0 or higher port

### Installation Steps
1. Download \`QuantumShield-Setup-v2.1.0.exe\` (45 MB)
2. Right-click and select "Run as Administrator"
3. Accept the User Account Control prompt
4. Choose installation directory (default: C:\\Program Files\\QuantumShield)
5. Select components:
   - Desktop Application (Required)
   - Browser Extensions (Chrome, Edge, Firefox)
   - Command Line Tools
6. Click "Install" and wait for completion
7. Reboot system when prompted

### Post-Installation
- Browser extensions will be automatically configured
- USB drivers installed via Windows Update
- Launch from Start Menu → QuantumShield

## macOS Installation (macOS 11 Big Sur or later)

### System Requirements
- macOS 11.0 or later
- Apple Silicon or Intel processor
- 4 GB RAM minimum
- 500 MB free disk space

### Installation Steps
1. Download \`QuantumShield-v2.1.0.dmg\` (45 MB)
2. Open the DMG file
3. Drag QuantumShield.app to Applications folder
4. First launch: Right-click → Open (to bypass Gatekeeper)
5. Grant permissions:
   - Accessibility
   - Input Monitoring
   - USB Device Access

### Browser Configuration
- Safari: Extension auto-enabled
- Chrome/Edge: Install from Chrome Web Store
- Firefox: Install from Firefox Add-ons

## Linux Installation (Ubuntu/Debian/Fedora)

### Ubuntu/Debian
\`\`\`bash
# Add QuantumShield repository
wget -qO- https://packages.quantumshield.com/gpg.key | sudo apt-key add -
echo "deb https://packages.quantumshield.com/apt stable main" | sudo tee /etc/apt/sources.list.d/quantumshield.list

# Update and install
sudo apt update
sudo apt install quantumshield

# Start the service
sudo systemctl enable quantumshield
sudo systemctl start quantumshield
\`\`\`

### Fedora/RHEL
\`\`\`bash
# Add repository
sudo dnf config-manager --add-repo https://packages.quantumshield.com/rpm/quantumshield.repo

# Install
sudo dnf install quantumshield

# Start service
sudo systemctl enable quantumshield
sudo systemctl start quantumshield
\`\`\`

### USB Permissions (All Linux)
\`\`\`bash
# Create udev rule
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="2b0e", ATTR{idProduct}=="1234", MODE="0666"' | sudo tee /etc/udev/rules.d/70-quantumshield.rules

# Reload udev
sudo udevadm control --reload-rules
sudo udevadm trigger
\`\`\`
          `
        },
        {
          title: 'First-Time Setup',
          desc: 'Complete device initialization and registration process',
          content: `
# First-Time Setup Guide

## Device Initialization

### 1. Connect Your Device
- Insert QuantumShield into a USB-A or USB-C port
- Blue LED should pulse slowly (ready state)
- Launch QuantumShield Desktop application

### 2. Create Your PIN
PIN Requirements:
- 6-8 digits recommended (4-16 supported)
- Avoid sequences (1234, 1111)
- Don't use birthdates or common PINs
- Store securely in password manager

Setting Your PIN:
1. Click "Create New PIN"
2. Enter PIN twice for confirmation
3. Device will flash green when set successfully

### 3. Biometric Setup (Optional)
Supported biometric types:
- Fingerprint (up to 5 fingerprints)
- Face recognition (on supported devices)

To add fingerprints:
1. Navigate to Settings → Biometrics
2. Click "Add Fingerprint"
3. Follow on-screen prompts
4. Place finger on sensor 5 times
5. Confirm with your PIN

### 4. Generate Key Pairs

QuantumShield automatically generates:
- FIDO2 Attestation Key (WebAuthn)
- PGP/GPG Key Pair (Email encryption)
- SSH Key Pair (Server access)
- Quantum-Safe Certificate (TLS)

Key Generation Process:
1. Click "Generate Keys"
2. Select key types needed
3. Wait 30-60 seconds (quantum entropy generation)
4. Keys stored in hardware-protected memory

### 5. Backup & Recovery

Create Recovery Key:
1. Settings → Backup → Generate Recovery Key
2. Write down 24-word mnemonic phrase
3. Store in secure, offline location
4. Test recovery on second device

Backup Options:
- Cloud Backup (encrypted, requires master password)
- Offline Backup (encrypted USB drive)
- Hardware Backup (second QuantumShield device)

### 6. Register with Services

WebAuthn Services:
- Google Accounts
- Microsoft Accounts
- GitHub
- Twitter/X
- Hundreds more...

Registration Steps:
1. Log into service
2. Navigate to Security Settings
3. Select "Add Security Key"
4. Follow prompts
5. Tap QuantumShield when LED flashes

## Verification

Test your setup:
- [ ] PIN works without errors
- [ ] Biometric authentication (if enabled)
- [ ] At least one service registered
- [ ] Recovery key backed up
- [ ] Desktop app shows "Ready" status
          `
        },
      ],
    },
    {
      id: 'user-guides',
      category: 'User Guides',
      items: [
        {
          title: 'FIDO2 Authentication',
          desc: 'Set up passwordless login with WebAuthn/FIDO2',
          content: `
# FIDO2 Authentication Guide

## What is FIDO2?

FIDO2 is the latest standard for passwordless authentication. It combines:
- WebAuthn - Browser API for authentication
- CTAP2 - Protocol for external authenticators

Benefits:
- No passwords to remember
- Phishing resistant
- Privacy preserving
- Quantum-safe (with QuantumShield)

## Setting Up FIDO2

### Supported Browsers
- Chrome 67+
- Edge 18+
- Firefox 60+
- Safari 13+
- Opera 54+

### Register Your Key

Google Account Example:
1. Go to myaccount.google.com
2. Click Security → 2-Step Verification
3. Scroll to "Security keys"
4. Click "Add security key"
5. Insert QuantumShield
6. Tap device when prompted
7. Name your key "QuantumShield - Work" or similar

GitHub Example:
1. Settings → Password and authentication
2. Security keys → Register new security key
3. Insert QuantumShield
4. Tap when prompted
5. Name your key

### Using FIDO2

Sign-In Flow:
1. Navigate to website
2. Enter username (not password!)
3. Click "Sign in with security key"
4. Tap your QuantumShield device
5. Signed in!

Advanced Options:
- User Verification: PIN + tap or biometric
- Passwordless: No password needed at all
- Multi-device: Use same key on multiple computers

## Troubleshooting

"No security key detected"
- Ensure device is inserted
- Try a different USB port
- Update browser to latest version

"This security key is already registered"
- Use a different email/account
- Or remove old registration first

Touch not responding
- Wait for LED to flash blue
- Tap firmly on the center
- Clean the touch surface
          `
        },
        {
          title: 'SSH Key Management',
          desc: 'Secure SSH authentication with hardware-backed keys',
          content: `
# SSH Key Management

## Generate SSH Key on QuantumShield

### Using Desktop App
1. Open QuantumShield Desktop
2. Navigate to SSH → Generate Key
3. Select algorithm:
   - Ed25519 (Recommended, quantum-resistant hybrid)
   - RSA 4096 (Legacy compatibility)
   - ECDSA P-256 (Deprecated, for old systems)
4. Enter key comment: "user@hostname-quantumshield"
5. Click Generate
6. Export public key

### Using CLI
\`\`\`bash
# List available keys
quantumshield-cli ssh list

# Generate new key
quantumshield-cli ssh generate --algorithm ed25519 --comment "mykey"

# Export public key
quantumshield-cli ssh export --id 0 > ~/.ssh/quantumshield.pub
\`\`\`

## Add Key to SSH Servers

### Copy to Server
\`\`\`bash
# Copy public key
ssh-copy-id -i ~/.ssh/quantumshield.pub user@server.com

# Or manually
cat ~/.ssh/quantumshield.pub | ssh user@server.com "cat >> ~/.ssh/authorized_keys"
\`\`\`

### Configure SSH Agent
\`\`\`bash
# Start quantumshield SSH agent
eval $(quantumshield-cli ssh-agent)

# Add key
quantumshield-cli ssh add --id 0

# Test connection
ssh -v user@server.com
\`\`\`

## GitHub/GitLab Integration

### Add to GitHub
1. Copy public key: \`cat ~/.ssh/quantumshield.pub\`
2. GitHub → Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste public key
5. Name it "QuantumShield"

### Configure Git
\`\`\`bash
# Set SSH config
cat <<EOF >> ~/.ssh/config
Host github.com
    User git
    IdentityAgent /tmp/quantumshield-agent.sock
    PreferredAuthentications publickey
EOF

# Test
ssh -T git@github.com
\`\`\`

## Advanced Configuration

### Multiple Keys
\`\`\`bash
# Generate separate keys for different purposes
quantumshield-cli ssh generate --comment "work-servers"
quantumshield-cli ssh generate --comment "personal-github"

# Use specific key
ssh -i quantumshield:0 user@work-server.com
ssh -i quantumshield:1 git@github.com
\`\`\`

### Key Rotation
\`\`\`bash
# Generate new key
quantumshield-cli ssh generate

# Copy new key to all servers
for server in $(cat servers.txt); do
    ssh-copy-id -i ~/.ssh/quantumshield-new.pub $server
done

# Delete old key
quantumshield-cli ssh delete --id 0
\`\`\`
          `
        },
        {
          title: 'Email Encryption (PGP/GPG)',
          desc: 'Secure email with OpenPGP encryption',
          content: `
# Email Encryption Guide

## PGP/GPG with QuantumShield

### Generate PGP Key Pair

Desktop App:
1. Navigate to Encryption → PGP
2. Click "Generate Key Pair"
3. Enter details:
   - Name: Your full name
   - Email: your@email.com
   - Comment: "QuantumShield Protected"
4. Select key size: 4096-bit RSA
5. Set expiration: 2 years recommended
6. Wait for key generation (uses quantum entropy)

Command Line:
\`\`\`bash
quantumshield-cli pgp generate \\
    --name "Amit Kumar" \\
    --email "amit.kumar@mycompany.in" \\
    --keysize 4096 \\
    --expires 2y
\`\`\`

### Export Public Key
\`\`\`bash
# Export ASCII-armored public key
quantumshield-cli pgp export --public > publickey.asc

# Upload to keyserver
gpg --keyserver keys.openpgp.org --send-keys YOUR_KEY_ID
\`\`\`

## Email Client Integration

### Thunderbird + Enigmail
1. Install Enigmail add-on
2. Tools → Enigmail → Key Management
3. Generate → Use existing key on smart card
4. Insert QuantumShield
5. Select your key
6. Compose encrypted email: Enable encryption button

### macOS Mail + GPG Tools
1. Install GPGTools from https://gpgtools.org
2. Open GPG Keychain
3. Import → Smart Card
4. Compose email → Click lock icon to encrypt

### Gmail (via Browser Extension)
1. Install QuantumShield Chrome Extension
2. Visit Gmail
3. Click compose
4. Enable "Encrypt" toggle
5. Recipients must have public keys published

## Encrypting & Signing

### Encrypt Message
\`\`\`bash
# Encrypt for recipient
echo "Secret message" | quantumshield-cli pgp encrypt \\
    --recipient priya.sharma@mycompany.in > encrypted.gpg

# Decrypt
quantumshield-cli pgp decrypt < encrypted.gpg
\`\`\`

### Sign Message
\`\`\`bash
# Sign (creates .sig file)
quantumshield-cli pgp sign < document.pdf > document.pdf.sig

# Verify signature
quantumshield-cli pgp verify < document.pdf.sig
\`\`\`

### Encrypt + Sign
\`\`\`bash
# Both operations
quantumshield-cli pgp encrypt --sign \\
    --recipient vikram.singh@mycompany.in < message.txt > message.gpg
\`\`\`

## Key Management

### Publish Public Key
\`\`\`bash
# Export
quantumshield-cli pgp export --public > mypubkey.asc

# Upload to keyserver
gpg --keyserver keys.openpgp.org --send-keys YOUR_KEY_ID

# Or use keybase
keybase pgp select --import
\`\`\`

### Import Others' Keys
\`\`\`bash
# From keyserver
gpg --keyserver keys.openpgp.org --recv-keys THEIR_KEY_ID

# From file
gpg --import their-key.asc

# Trust level
gpg --edit-key THEIR_KEY_ID
> trust
> 5 (ultimate trust)
> quit
\`\`\`

## Quantum-Safe Hybrid Encryption

QuantumShield uses hybrid encryption:
- Traditional RSA/ECC for compatibility
- Quantum-safe algorithms (Kyber, Dilithium) layered on top
- Automatic fallback for legacy systems

Enable hybrid mode:
\`\`\`bash
quantumshield-cli pgp config --hybrid-mode on
\`\`\`
          `
        },
      ],
    },
    {
      id: 'developers',
      category: 'Developer Resources',
      items: [
        {
          title: 'API Documentation',
          desc: 'Complete REST API and SDK reference',
          content: `
# API Documentation Overview

## Available APIs

### 1. WebAuthn API
JavaScript library for FIDO2 authentication in web applications.

Installation:
\`\`\`bash
npm install @quantumshield/webauthn
\`\`\`

Quick Start:
\`\`\`javascript
import { QuantumShield } from '@quantumshield/webauthn';

// Registration
const credential = await QuantumShield.create({
  challenge: challengeFromServer,
  user: {
    id: userId,
    name: 'rahul.sharma@mycompany.in',
    displayName: 'Rahul Sharma'
  },
  rp: {
    name: 'My App',
    id: 'mycompany.in'
  }
});

// Authentication
const assertion = await QuantumShield.get({
  challenge: challengeFromServer
});
\`\`\`

### 2. REST API
Server-side API for device management and verification.

Base URL: \`https://api.quantumshield.com/v3\`

Authentication:
\`\`\`http
Authorization: Bearer YOUR_API_KEY
\`\`\`

Endpoints:
- \`POST /devices/register\` - Register new device
- \`GET /devices/{id}\` - Get device info
- \`POST /verify\` - Verify authentication
- \`GET /keys/{id}\` - Get public key

### 3. Native SDKs

iOS SDK:
\`\`\`swift
import QuantumShield

let device = QuantumShieldDevice()
device.authenticate { result in
    switch result {
    case .success(let signature):
        print("Authenticated: \\(signature)")
    case .failure(let error):
        print("Error: \\(error)")
    }
}
\`\`\`

Android SDK:
\`\`\`kotlin
import com.quantumshield.sdk.QuantumShield

val device = QuantumShield.getInstance()
device.authenticate(challenge) { result ->
    result.onSuccess { signature ->
        println("Authenticated")
    }
    result.onFailure { error ->
        println("Error: $error")
    }
}
\`\`\`

Python SDK:
\`\`\`python
from quantumshield import QuantumShield

device = QuantumShield()
signature = device.authenticate(challenge)
\`\`\`

## Complete Documentation

Visit [API Reference](/api-reference) for complete documentation with all endpoints, parameters, and examples.
          `
        },
        {
          title: 'SDK Downloads',
          desc: 'Download SDKs for all major platforms and languages',
          content: `
# SDK Downloads

## Official SDKs

### JavaScript/TypeScript
Package: \`@quantumshield/sdk\`
Version: 3.2.0
Size: 850 KB

\`\`\`bash
# NPM
npm install @quantumshield/sdk

# Yarn
yarn add @quantumshield/sdk

# PNPM
pnpm add @quantumshield/sdk
\`\`\`

Features:
- Full WebAuthn/FIDO2 support
- TypeScript definitions included
- Works in Node.js and browsers
- Tree-shakeable (only 45KB minified core)

### Python
Package: \`quantumshield\`
Version: 2.4.1
Size: 1.2 MB

\`\`\`bash
pip install quantumshield
\`\`\`

Supported: Python 3.8+

### Ruby
Gem: \`quantumshield\`
Version: 1.8.0

\`\`\`bash
gem install quantumshield
\`\`\`

### Java
Maven:
\`\`\`xml
<dependency>
    <groupId>com.quantumshield</groupId>
    <artifactId>quantumshield-sdk</artifactId>
    <version>2.1.0</version>
</dependency>
\`\`\`

Gradle:
\`\`\`gradle
implementation 'com.quantumshield:quantumshield-sdk:2.1.0'
\`\`\`

### Go
Package: \`github.com/quantumshield/go-sdk\`
Version: v1.5.2

\`\`\`bash
go get github.com/quantumshield/go-sdk
\`\`\`

### C/C++
Library: libquantumshield
Version: 2.0.1

Download from [Downloads](/downloads) page.

## Mobile SDKs

### iOS (Swift/Objective-C)
Framework: QuantumShield.framework
Version: 1.9.0
Requirements: iOS 13+

CocoaPods:
\`\`\`ruby
pod 'QuantumShield', '~> 1.9'
\`\`\`

Swift Package Manager:
\`\`\`swift
.package(url: "https://github.com/quantumshield/ios-sdk", from: "1.9.0")
\`\`\`

### Android
Package: com.quantumshield.sdk
Version: 2.1.0
Requirements: Android 8.0+ (API 26+)

\`\`\`gradle
implementation 'com.quantumshield:android-sdk:2.1.0'
\`\`\`

## Source Code

All SDKs are open source under MIT license:
- GitHub: https://github.com/quantumshield
- Documentation: https://docs.quantumshield.com
- Issues: Report on respective repository

## Support

- Discord: https://discord.gg/quantumshield
- Stack Overflow: Tag \`quantumshield\`
- Email: developers@quantumshield.com
          `
        },
        {
          title: 'Code Examples',
          desc: 'Real-world integration examples and sample code',
          content: `
# Code Examples

## Web Authentication

### Registration (Create Credential)
\`\`\`javascript
async function registerUser(username) {
  // Get challenge from server
  const challengeResponse = await fetch('/api/register/challenge', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  const { challenge, user } = await challengeResponse.json();

  // Create credential with QuantumShield
  const credential = await navigator.credentials.create({
    publicKey: {
      challenge: Uint8Array.from(challenge, c => c.charCodeAt(0)),
      rp: {
        name: "My App",
        id: window.location.hostname
      },
      user: {
        id: Uint8Array.from(user.id, c => c.charCodeAt(0)),
        name: user.name,
        displayName: user.displayName
      },
      pubKeyCredParams: [
        { type: "public-key", alg: -7 },  // ES256
        { type: "public-key", alg: -257 } // RS256
      ],
      authenticatorSelection: {
        authenticatorAttachment: "cross-platform",
        userVerification: "required"
      },
      timeout: 60000
    }
  });

  // Send to server for verification
  const response = await fetch('/api/register/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      credential: {
        id: credential.id,
        rawId: Array.from(new Uint8Array(credential.rawId)),
        response: {
          clientDataJSON: Array.from(new Uint8Array(credential.response.clientDataJSON)),
          attestationObject: Array.from(new Uint8Array(credential.response.attestationObject))
        }
      }
    })
  });

  return response.json();
}
\`\`\`

### Authentication (Get Assertion)
\`\`\`javascript
async function authenticateUser(username) {
  // Get challenge from server
  const challengeResponse = await fetch('/api/login/challenge', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  const { challenge, allowCredentials } = await challengeResponse.json();

  // Get assertion from QuantumShield
  const assertion = await navigator.credentials.get({
    publicKey: {
      challenge: Uint8Array.from(challenge, c => c.charCodeAt(0)),
      allowCredentials: allowCredentials.map(c => ({
        type: 'public-key',
        id: Uint8Array.from(c.id, b => b.charCodeAt(0))
      })),
      timeout: 60000,
      userVerification: "required"
    }
  });

  // Verify with server
  const response = await fetch('/api/login/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      assertion: {
        id: assertion.id,
        rawId: Array.from(new Uint8Array(assertion.rawId)),
        response: {
          clientDataJSON: Array.from(new Uint8Array(assertion.response.clientDataJSON)),
          authenticatorData: Array.from(new Uint8Array(assertion.response.authenticatorData)),
          signature: Array.from(new Uint8Array(assertion.response.signature)),
          userHandle: assertion.response.userHandle ?
            Array.from(new Uint8Array(assertion.response.userHandle)) : null
        }
      }
    })
  });

  return response.json();
}
\`\`\`

## Node.js Server-Side

### Verify Registration
\`\`\`javascript
const { Fido2Lib } = require('fido2-lib');

const f2l = new Fido2Lib({
  timeout: 60000,
  rpId: "mycompany.in",
  rpName: "My App",
  challengeSize: 128
});

async function verifyRegistration(credential, challenge, username) {
  const attestationExpectations = {
    challenge: challenge,
    origin: "https://mycompany.in",
    factor: "either"
  };

  const regResult = await f2l.attestationResult(
    credential,
    attestationExpectations
  );

  // Store public key and credential ID in database
  await db.credentials.create({
    userId: username,
    credentialId: regResult.authnrData.get("credId"),
    publicKey: regResult.authnrData.get("credentialPublicKeyPem"),
    counter: regResult.authnrData.get("counter")
  });

  return { success: true };
}
\`\`\`

### Verify Authentication
\`\`\`javascript
async function verifyAuthentication(assertion, challenge, username) {
  // Get stored credential from database
  const storedCred = await db.credentials.findOne({ userId: username });

  const assertionExpectations = {
    challenge: challenge,
    origin: "https://mycompany.in",
    factor: "either",
    publicKey: storedCred.publicKey,
    prevCounter: storedCred.counter,
    userHandle: username
  };

  const authnResult = await f2l.assertionResult(
    assertion,
    assertionExpectations
  );

  // Update counter in database
  await db.credentials.update(
    { userId: username },
    { counter: authnResult.authnrData.get("counter") }
  );

  // Create session
  const token = jwt.sign({ username }, process.env.JWT_SECRET);

  return { success: true, token };
}
\`\`\`

## Python Flask Example

\`\`\`python
from flask import Flask, request, jsonify
from webauthn import (
    generate_registration_options,
    verify_registration_response,
    generate_authentication_options,
    verify_authentication_response
)
import secrets

app = Flask(__name__)

@app.route('/api/register/challenge', methods=['POST'])
def register_challenge():
    username = request.json['username']

    # Generate challenge
    challenge = secrets.token_bytes(32)

    # Store challenge in session/redis
    session['challenge'] = challenge
    session['username'] = username

    options = generate_registration_options(
        rp_id="mycompany.in",
        rp_name="My App",
        user_id=username.encode(),
        user_name=username,
        user_display_name=username,
        challenge=challenge
    )

    return jsonify(options)

@app.route('/api/register/verify', methods=['POST'])
def register_verify():
    credential = request.json['credential']
    challenge = session.get('challenge')
    username = session.get('username')

    try:
        verification = verify_registration_response(
            credential=credential,
            expected_challenge=challenge,
            expected_origin="https://mycompany.in",
            expected_rp_id="mycompany.in"
        )

        # Store credential in database
        db.store_credential(
            username=username,
            credential_id=verification.credential_id,
            public_key=verification.credential_public_key,
            sign_count=verification.sign_count
        )

        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"error": str(e)}), 400
\`\`\`

## More Examples

Visit our GitHub repository for more examples:
- React + Express full app
- Vue.js SPA integration
- Django REST framework
- Ruby on Rails
- PHP Laravel
- ASP.NET Core

https://github.com/quantumshield/examples
          `
        },
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(docs[0].items[0]);

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Documentation"
        subtitle="Everything you need to know about QuantumShield"
        badge="Comprehensive Guides"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Navigation</h3>
                <div className="space-y-6">
                  {docs.map((section) => (
                    <div key={section.id}>
                      <h4 className="text-white font-semibold mb-3">{section.category}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.title}>
                            <button
                              onClick={() => setSelectedItem(item)}
                              className={`text-left text-sm transition-colors w-full py-1.5 px-2 rounded ${
                                selectedItem.title === item.title
                                  ? 'text-quantum-cyan bg-quantum-cyan/10'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link href="/api-reference" className="text-sm text-gray-400 hover:text-quantum-cyan transition-colors">API Reference</Link></li>
                    <li><Link href="/downloads" className="text-sm text-gray-400 hover:text-quantum-cyan transition-colors">Downloads</Link></li>
                    <li><Link href="/blog" className="text-sm text-gray-400 hover:text-quantum-cyan transition-colors">Blog</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-12">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    {selectedItem.title}
                  </h1>
                  <p className="text-lg text-gray-400">{selectedItem.desc}</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                  <div className="text-gray-300 leading-relaxed">
                    {(() => {
                      const lines = selectedItem.content.split('\n');
                      const elements: React.ReactElement[] = [];
                      let inCodeBlock = false;
                      let codeLines: string[] = [];
                      let codeLanguage = '';

                      lines.forEach((line, idx) => {
                        // Handle code blocks
                        if (line.startsWith('```')) {
                          if (!inCodeBlock) {
                            inCodeBlock = true;
                            codeLanguage = line.substring(3);
                            codeLines = [];
                          } else {
                            inCodeBlock = false;
                            elements.push(
                              <div key={`code-${idx}`} className="my-6">
                                <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                                  <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-mono text-gray-400">{codeLanguage || 'code'}</span>
                                    <button className="text-xs text-quantum-cyan hover:text-quantum-cyan-glow transition-colors flex items-center gap-1.5">
                                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                      </svg>
                                      Copy
                                    </button>
                                  </div>
                                  <pre className="p-5 overflow-x-auto">
                                    <code className="text-sm font-mono text-gray-300 leading-relaxed">{codeLines.join('\n')}</code>
                                  </pre>
                                </div>
                              </div>
                            );
                          }
                          return;
                        }

                        if (inCodeBlock) {
                          codeLines.push(line);
                          return;
                        }

                        // Headings
                        if (line.startsWith('# ')) {
                          elements.push(<h1 key={idx} className="text-3xl font-bold text-white mt-10 mb-4 first:mt-0">{line.substring(2)}</h1>);
                        } else if (line.startsWith('## ')) {
                          elements.push(<h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">{line.substring(3)}</h2>);
                        } else if (line.startsWith('### ')) {
                          elements.push(<h3 key={idx} className="text-xl font-bold text-quantum-cyan mt-6 mb-3">{line.substring(4)}</h3>);
                        } else if (line.startsWith('#### ')) {
                          elements.push(<h4 key={idx} className="text-lg font-semibold text-white mt-5 mb-2">{line.substring(5)}</h4>);
                        }
                        // Bold list items
                        else if (line.startsWith('- **') && line.includes('**')) {
                          const match = line.match(/- \*\*(.+?)\*\*(.+)/);
                          if (match) {
                            elements.push(
                              <li key={idx} className="ml-6 mb-2 flex items-start gap-2">
                                <span className="text-quantum-cyan mt-1.5 text-xs">●</span>
                                <span>
                                  <strong className="text-quantum-cyan font-semibold">{match[1]}</strong>
                                  <span className="text-gray-300">{match[2]}</span>
                                </span>
                              </li>
                            );
                          }
                        }
                        // Regular list items
                        else if (line.startsWith('- ')) {
                          elements.push(
                            <li key={idx} className="ml-6 mb-2 flex items-start gap-2">
                              <span className="text-quantum-cyan mt-1.5 text-xs">●</span>
                              <span className="text-gray-300">{line.substring(2)}</span>
                            </li>
                          );
                        }
                        // Numbered lists
                        else if (line.match(/^\d+\. /)) {
                          const num = line.match(/^(\d+)\./)?.[1];
                          elements.push(
                            <li key={idx} className="ml-6 mb-2 flex items-start gap-3">
                              <span className="text-quantum-cyan font-semibold min-w-[1.5rem]">{num}.</span>
                              <span className="text-gray-300 flex-1">{line.substring(line.indexOf('. ') + 2)}</span>
                            </li>
                          );
                        }
                        // Bold standalone text
                        else if (line.startsWith('**') && line.endsWith('**')) {
                          elements.push(<p key={idx} className="font-bold text-white mt-5 mb-3">{line.replace(/\*\*/g, '')}</p>);
                        }
                        // Empty lines
                        else if (line.trim() === '') {
                          elements.push(<div key={idx} className="h-4" />);
                        }
                        // Regular paragraphs
                        else if (line.trim()) {
                          elements.push(<p key={idx} className="mb-4 text-gray-300 leading-relaxed">{line}</p>);
                        }
                      });

                      return elements;
                    })()}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-500">
                    Was this guide helpful?{' '}
                    <a href="#" className="text-quantum-cyan hover:underline">Let us know</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
