# ElectraVote

ElectraVote is a groundbreaking Web3-based voting platform designed to enhance the security, transparency, and efficiency of elections through the power of blockchain technology. Built on the **Lisk** platform, ElectraVote addresses critical electoral challenges, such as fraud, manipulation, and voter accessibility, with a decentralized and secure approach tailored for emerging markets like Nigeria.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technology Stack](#technology-stack)
6. [How It Works](#how-it-works)
7. [Contributing](#contributing)
8. [License](#license)

## Features
- **Blockchain Security**: ElectraVote utilizes the Lisk blockchain to ensure the integrity of votes. Every vote is encrypted and recorded in a tamper-proof manner.
- **Smart Contracts**: Automates the electoral process with smart contracts that verify, validate, and store votes securely.
- **Transparency & Auditability**: All votes are publicly auditable, ensuring transparency without compromising voter privacy.
- **Decentralized Voting**: Prevents central authorities from controlling or manipulating the voting process.
- **User-Friendly Interface**: Intuitive and simple user experience, allowing voters to easily cast their ballots from any device.
- **Cross-Platform Accessibility**: Available on both desktop and mobile platforms, ensuring that voters in rural and urban areas can participate seamlessly.

## Project Structure
The project is organized into multiple directories and files, including:
```
ElectraVote/
├── public/                   # Static files (e.g., icons, logos)
├── src/                      # Main source code directory
│   ├── assets/               # Image assets
│   ├── common/               # Reusable components (e.g., Datepicker, Animations)
│   ├── components/           # Core components (e.g., Navbar, Footer, Input)
│   ├── pages/                # Application pages (e.g., Home, About, Create, Contact)
│   ├── App.jsx               # Root application component
│   ├── index.css             # Global styles
│   ├── main.jsx              # Application entry point
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                # Git ignore file
├── .prettierrc               # Prettier configuration
├── README.md                 # Project documentation
├── index.html                # Main HTML file
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
```

## Installation

Follow the steps below to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ONEONUORA/Electra_vote.git
   cd Electra_vote
   ```

2. **Install dependencies**:
   Before running the application, you need to install the required dependencies:
   ```bash
   npm install
   ```

3. **Run the development server**:
   Start the app locally:
   ```bash
   npm run dev
   ```

   You should see the application running at `http://localhost:3000`.

## Usage

After installation, navigate to the app’s homepage and explore the following functionality:

1. **Voter Registration**: Users can register securely using their blockchain wallet, enabling them to participate in upcoming elections.
2. **Casting Votes**: Once registered, voters can cast their ballots in a decentralized and transparent manner.
3. **Real-Time Results**: The results of each vote are securely processed and publicly verifiable on the blockchain, ensuring the integrity of the election process.

## Technology Stack

ElectraVote is built using the following technologies:

- **Frontend**:
  - **React**: A JavaScript library for building dynamic user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for designing modern interfaces.
  - **Vite**: A fast development environment and build tool.
  
- **Blockchain**:
  - **Lisk**: A blockchain platform designed for decentralized applications.
  - **Smart Contracts**: Custom smart contracts for handling voting logic and results securely.

- **Other Tools**:
  - **ESLint**: For maintaining code quality and consistency.
  - **Prettier**: For automatic code formatting.

## How It Works

1. **Voter Registration**:
   - Voters register securely on the platform using blockchain wallets. All personal data is encrypted and protected, ensuring secure access.
   
2. **Voting Process**:
   - Once registered, voters can participate in elections by casting their vote. Votes are encrypted and added to the Lisk blockchain using smart contracts, making them immutable and tamper-proof.
   
3. **Result Verification**:
   - The system automatically verifies and tallies the votes, with results visible to the public for auditing. Voter privacy is maintained throughout the process while ensuring full transparency of results.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch to your fork:
   ```bash
   git push origin feature-branch
   ```
5. Submit a Pull Request to this repository for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
