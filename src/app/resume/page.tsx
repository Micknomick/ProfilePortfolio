import { AnimatedTooltipPreview } from "@/components/molecules/AnimatedTooltipPreview";

const Resume = () => {
  return (
    <>
      <section className="section" id="skills">
        <div className="container mx-auto flex flex-col items-center ">
          <h2 className="text-6xl section-title mb-10">Skills</h2>
          <AnimatedTooltipPreview />
          <p>今回使ったフレームワーク・ライブラリになります。</p>
          <p>今後はRailsと連携したアプリ作成をしていく予定です。</p>
        </div>
      </section>
    </>
  );
};

export default Resume
