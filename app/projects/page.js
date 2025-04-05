'use client';

import ProjectCard from '../../components/ProjectCard';
import PageTemplate from '../../components/PageTemplate';

const projects = [
  {
    title: 'Garasi Bincang Coffee',
    github: 'https://github.com/lahmbert/ecommercev03',
    live: 'https://garasi-bincang-coffee.vercel.app/',
    description: 'Aplikasi e-commerce dengan fitur keranjang belanja, halaman produk, dan autentikasi pengguna. Menggunakan Supabase untuk database dan autentikasi real-time.',
    stack: 'Next.js, Tailwind CSS, Supabase'
  },
  {
    title: 'Quiz Assignment App',
    github: 'https://github.com/lahmbert/Quiz-Assignment-Fix',
    live: 'https://quiz-assignment-fix.vercel.app/',
    description: 'Platform kuis multi-bahasa (Bahasa Inggris dan Arab) dengan login, pembuatan soal, serta penyimpanan skor menggunakan Supabase.',
    stack: 'Next.js, Tailwind CSS, Supabase'
  },
  {
    title: 'Garasi Bincang (E-commerce Alternatif)',
    github: 'https://github.com/lahmbert/Ecommerce01',
    live: 'https://garasi-bincang.vercel.app/',
    description: 'Versi alternatif dari Garasi Bincang yang dibuat menggunakan Vue. Fokus pada layout produk dan navigasi sederhana.',
    stack: 'Vue.js, Tailwind CSS'
  },
  {
    title: 'Polleck PPOB',
    github: 'https://github.com/lahmbert/Polleck-PPOB',
    live: '#',
    description: 'Platform PPOB untuk pembayaran listrik, air, pulsa, dll. Menggunakan Laravel sebagai backend, ReactJS untuk frontend, dan MySQL untuk manajemen data transaksi.',
    stack: 'Laravel, ReactJS, Tailwind CSS, MySQL'
  },
  {
    title: 'AirBnb Chat App',
    github: 'https://github.com/lahmbert/AirBnbProject',
    live: '#',
    description: 'Aplikasi chat sederhana untuk platform sewa properti. Menggunakan WebSocket untuk komunikasi real-time antara pengguna.',
    stack: 'ReactJS, Tailwind CSS, Golang'
  },
  {
    title: 'Polleck Landing Page',
    github: 'https://github.com/lahmbert/polleck',
    live: 'https://polleck.vercel.app/',
    description: 'Landing page resmi untuk Polleck dengan tampilan modern dan animasi ringan. Berfungsi sebagai halaman informasi dan promosi aplikasi utama PPOB.',
    stack: 'ReactJS, Tailwind CSS'
  },
  {
    title: 'Portfolio Website',
    github: 'https://github.com/lahmbert/portfolio',
    live: 'https://bran-porto.vercel.app/projects',
    description: 'Personal portfolio website built with Next.js and custom CSS. Features responsive design and showcases my projects and skills.',
    stack: 'Next.js, CSS'
  }
];

export default function ProjectsPage() {
  return (
    <PageTemplate>
      <section className="section">
        <h1 className="section-title">Projects</h1>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-light)', 
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Check out some of the projects I've worked on. Each project demonstrates different skills and technologies.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '1.5rem',
          marginTop: '1rem'
        }}
        className="grid-cols-2">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
