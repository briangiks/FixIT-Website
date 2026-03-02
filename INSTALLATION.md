# Installation Guide for VS Code

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: Open terminal/command prompt and run `node --version`

2. **VS Code** (Visual Studio Code)
   - Download from: https://code.visualstudio.com/

3. **Git** (optional, but recommended)
   - Download from: https://git-scm.com/

## Installation Steps

### Step 1: Extract the Project

1. Extract the downloaded ZIP file to your desired location
2. Remember the folder location

### Step 2: Open in VS Code

1. Open Visual Studio Code
2. Go to **File > Open Folder**
3. Navigate to the extracted project folder and select it
4. Click **Select Folder** or **Open**

### Step 3: Install Dependencies

1. Open the integrated terminal in VS Code:
   - Press `Ctrl + ` (backtick) on Windows/Linux
   - Press `Cmd + ` (backtick) on Mac
   - Or go to **Terminal > New Terminal**

2. In the terminal, run:
   ```bash
   npm install
   ```
   
   This will install all the required packages. It may take a few minutes.

### Step 4: Install Recommended VS Code Extensions

VS Code will prompt you to install recommended extensions. Click **Install All** or install them manually:

1. **ESLint** - For JavaScript/TypeScript linting
2. **Prettier** - For code formatting
3. **Tailwind CSS IntelliSense** - For Tailwind CSS support
4. **ES7+ React/Redux/React-Native snippets** - For React development

### Step 5: Start the Development Server

In the terminal, run:
```bash
npm run dev
```

The development server will start, and you'll see output like:
```
VITE v5.x.x ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 6: View the Website

1. Open your web browser
2. Go to: `http://localhost:5173`
3. You should see the Fix IT Services website running

## Common Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Stop the server**: Press `Ctrl + C` in the terminal

## Project Assets

### Images

The project uses the `figma:asset` import scheme for images. In a local development environment, you may need to:

1. Replace `figma:asset/` imports with actual image paths
2. Store images in a `public` folder
3. Update import paths accordingly

Example:
```typescript
// Replace this:
import logoImage from "figma:asset/d74d3f6e4645eddfaf1936fa946983a763900ca8.png";

// With this:
import logoImage from "/assets/logo.png";
```

Then place your logo.png file in the `public/assets/` folder.

## Troubleshooting

### Problem: `npm install` fails

**Solution**: 
- Make sure you have Node.js installed
- Try deleting `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Problem: Port 5173 is already in use

**Solution**:
- The terminal will suggest an alternative port
- Or kill the process using port 5173
- Or modify `vite.config.ts` to use a different port

### Problem: TypeScript errors

**Solution**:
- Make sure all dependencies are installed
- Restart VS Code
- Run `npm install` again

### Problem: Styles not loading

**Solution**:
- Check that `globals.css` is properly imported in `main.tsx`
- Clear browser cache
- Restart the development server

## Making Changes

1. All React components are in the `/components` folder
2. Page components are in the `/pages` folder
3. Global styles are in `/styles/globals.css`
4. After making changes, the browser will automatically reload

## Building for Production

When ready to deploy:

1. Run: `npm run build`
2. The production files will be in the `dist` folder
3. Upload the contents of the `dist` folder to your web hosting service

## Getting Help

If you encounter issues:

1. Check the console in your browser (F12) for errors
2. Check the terminal in VS Code for server errors
3. Review the README.md file for more information
4. Contact: info@fixit-hvac.com

## Next Steps

- Customize the content in the component files
- Add your own images to the `public` folder
- Update contact information if needed
- Modify colors in `styles/globals.css`
- Deploy to your hosting provider

Enjoy building with Fix IT Services SFC website! 🚀
