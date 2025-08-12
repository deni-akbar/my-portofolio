'use client';

import ButtonSection from './components/ButtonSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';


export default function FrontendPortfolio() {



	return (
		<main className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
			<ButtonSection/>
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</main>
	);
}
