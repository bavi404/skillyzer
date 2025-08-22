# Skillyzer - Advanced Skill Assessment Dashboard

A modern, interactive dashboard for tracking and analyzing skill test performance. Built with Next.js 15, React 18, and TypeScript.

## ✨ Features

### 🎯 **Core Functionality**
- **Performance Tracking**: Monitor test scores, rankings, and percentiles
- **Interactive Analytics**: Detailed breakdowns with charts and visualizations
- **Progress Monitoring**: Track improvement over time across different topics
- **Smart Insights**: AI-powered recommendations for improvement areas

### 📊 **Dashboard Sections**
- **Overview**: Quick stats and current performance metrics
- **Analytics**: Detailed performance analysis with interactive charts
- **Test History**: Complete record of all test attempts with filtering
- **Performance Trends**: Progress tracking over time with trend analysis

### 🎨 **Enhanced UI/UX**
- **Modern Design**: Clean, professional interface using shadcn/ui components
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Data Visualization**: Multiple chart types (line, bar, area, pie) with Recharts

### 🔧 **Technical Features**
- **TypeScript**: Full type safety and better development experience
- **State Management**: Efficient React state handling with hooks
- **Performance**: Optimized rendering and smooth interactions
- **Accessibility**: WCAG compliant components and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/skillyzer.git
   cd skillyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
skillyzer/
├── app/                    # Next.js 15 app directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Main dashboard page
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── Analysis.tsx      # Syllabus-wise performance analysis
│   ├── Content.tsx       # Main test information and updates
│   ├── Graph.tsx         # Performance charts and comparisons
│   ├── Navbar.tsx        # Top navigation bar
│   ├── QuestionAnalysis.tsx # Detailed question-level analytics
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── TestHistory.tsx   # Test history with filtering
│   └── PerformanceTrends.tsx # Performance trends over time
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
└── public/               # Static assets (images, icons)
```

## 🎨 UI Components

Built with **shadcn/ui** for consistent, accessible components:
- Cards, Buttons, Badges
- Progress bars and Charts
- Dialogs and Forms
- Responsive layouts

## 📈 Data Visualization

Powered by **Recharts** for beautiful, interactive charts:
- Line charts for trends
- Bar charts for comparisons
- Area charts for progress
- Pie charts for distributions

## 🔧 Customization

### Styling
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for consistent theming
- **Responsive Design** with mobile-first approach

### Configuration
- **TypeScript** configuration in `tsconfig.json`
- **Tailwind** configuration in `tailwind.config.ts`
- **Next.js** configuration in `next.config.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Build and deploy from Git
- **Railway**: Simple deployment with database support
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **shadcn/ui** for beautiful component library
- **Recharts** for powerful charting capabilities
- **Tailwind CSS** for utility-first CSS framework

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/skillyzer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/skillyzer/discussions)
- **Email**: support@skillyzer.com

---

**Built with ❤️ for developers who want to track their learning progress**
