
# 📘 Assignment: Value Metrix

This project is built using [Next.js](https://nextjs.org/)

---

## 🗂️ Project Structure

```

/app              # App Router pages and layouts
/components       # Reusable UI components
/lib              # Utility functions 
/prisma           # Contains the prisma schema
/public           # Static assets
/styles           # Global and module-level styles
/.env.example     # Example environment variables
/README.md        # Project documentation
/next.config.js   # Next.js configuration
/package.json     # Project dependencies and scripts

````

---

## How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
    ````

2. **Install dependencies**

   ```bash
   pnpm install
   ```
3. **Generate Prisma Client**

   ```bash
   npx prisma generate
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory and add necessary API keys or environment configs.
   ```bash
   DATABASE_URL=
   NEXTAUTH_SECRET=secret
   FINNHUB_API_KEY=
   OPENAI_API_KEY= 
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧠 Prompt Design Explanation

I have used the Structured ouput response feature of the OpenAI API.
Also have used Vercel AI SDK to make it more optimized to work with Nextjs

* **Design Principles**:
  * **Clarity** – Prompts are concise and purpose-specific to improve reliability.
  * **Consistency** – Uses predictable formatting to standardize responses.
  * **Simplicity** – It is a short and simple prompt to extract the exact info about the portfolio

---

## ⚠️ Limitations & What’s Next

### Known Limitations

* The ouput from the OpenAI API could be way more better
* There can be mini UI bugs in some places
* The schema fields are not the best, they can be way more optimized
* There can be more strict checks in the server actions


### What I’d Build Next

* Make the AI response better
* Add a chat to portfolio feature
* Show more informaiton to the user about the Stocks they hold
---
