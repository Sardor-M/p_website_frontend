import styled from 'styled-components';
import AboutMe from '@/pages/About/About';
import ContactMe from '@/pages/Contact/Contact';
import { themeColor } from '@/themes/color';
import { DarkModeProps } from '@/types/blog';
import Projects from '@/pages/Portfolio/Projects';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;

  ${themeColor.breakpoints.mobile} {
    padding: 0 20px;
  }
`;

const Section = styled.section`
  padding: 80px 0 60px;
  min-height: 100vh;
  scroll-margin-top: 70px;

  ${themeColor.breakpoints.mobile} {
    padding: 30px 0 20px;
  }
`;

export default function RootPortfolio({ isDarkMode }: DarkModeProps) {
  return (
    <PageContainer>
      <Section id="about">
        <AboutMe isDarkMode={isDarkMode} />
      </Section>
      <Section id="projects">
        <Projects isDarkMode={isDarkMode} />
      </Section>
      <Section id="contact">
        <ContactMe isDarkMode={isDarkMode} />
      </Section>
    </PageContainer>
  );
}
