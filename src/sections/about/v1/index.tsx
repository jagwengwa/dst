import { aboutSectionData } from '@/data/about-section/v1';
import { ImageProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

import patternOne from 'public/assets/images/about/pattern-1.png';

export interface AboutSectionProps {
  images: {
    image1: ImageProps;
    image2: ImageProps;
    image3: ImageProps;
    image4: ImageProps;
  };
  sectionHeading: SectionHeadingWithoutStylingProps;
  keyPoints: {
    icon: React.ReactNode;
    title: string;
  }[];
  description?: string;
}

export function AboutSection() {
  const { images, sectionHeading, keyPoints, description } = aboutSectionData;
  return (
    <section className="section-padding-primary overflow-hidden px-20">
      <Container>
        <div className="grid items-center justify-center gap-12 lg:grid-cols-[.92fr_1fr] 2xl:gap-20">
          {/* Content  */}
          <div className="lg:order-2" data-aos="fade-left" data-aos-delay="200">
            <SectionHeading {...sectionHeading} alignment="center" />
            {keyPoints && keyPoints.length > 0 && (
              <div className="mt-7 grid gap-5 text-accent-900 sm:grid-cols-2 md:mt-10 md:gap-[1.875rem] dark:text-white">
                {keyPoints.map((keyPoint, index) => (
                  <div
                    key={index}
                    className="group flex min-h-[64px] items-center gap-5 rounded-5 border border-primary px-6 py-2 md:min-h-[85px] md:px-[1.875rem] md:py-3"
                  >
                    <span className="duration flex-none scale-100 transition-transform ease-linear group-hover:scale-90">
                      {keyPoint.icon}
                    </span>
                    <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                      {keyPoint.title}
                    </h3>
                  </div>
                ))}
              </div>
            )}
            {description && (
              <p className="mt-5 md:mt-[1.875rem]">{description}</p>
            )}
            <Button
              asChild
              className={cn([
                // Layout
                'mx-auto mt-10 rounded-5 border',

                // on card hover effects
                'group-hover/service:border-primary',

                // Light
                'border-current bg-transparent text-accent-900 hover:border-primary hover:bg-transparent hover:text-primary',

                // Dark
                'dark:border-accent-900 dark:bg-accent-900 dark:text-white dark:hover:text-primary  group-hover/service:dark:bg-transparent',

                // stop default button hover effects
                'before:hidden after:hidden',
              ])}
            >
              <CustomLink href={'/about'}>
                <span>Learn More</span>
                <span className="relative top-[-2px] text-sm/[1] text-primary">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" />
                  </svg>
                </span>
              </CustomLink>
            </Button>
          </div>

          {/* Images  */}
          {images && (
            <div className="mx-auto text-center">
              <div className="relative mx-auto grid max-w-[580px] grid-cols-2 gap-2.5 overflow-hidden">
                {/* Image 1  */}
                <div className="relative flex justify-end overflow-hidden">
                  <div
                    className="relative z-[2] mt-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <span className="absolute -left-2.5 -top-2.5 -z-1 h-full w-full rounded-tl-[60px] bg-primary-light"></span>
                    <div className="relative z-[4] overflow-hidden">
                      <Image
                        src={images.image1.src}
                        alt={images.image1.alt}
                        width={images.image1.width}
                        height={images.image1.height}
                        className="rounded-tl-[60px] object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Pattern  */}
                  <Image
                    src={patternOne.src}
                    width={383}
                    height={246}
                    alt="pattern-1"
                    placeholder="blur"
                    blurDataURL={patternOne.blurDataURL}
                    className="absolute bottom-[-55%] left-[42px] z-1  block object-cover"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                  />
                </div>

                {/* Image 2  */}
                <div className="flex overflow-hidden">
                  <Image
                    src={images.image2.src}
                    alt={images.image2.alt}
                    width={images.image2.width}
                    height={images.image2.height}
                    className="rounded-[80px_10px] object-cover"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  />
                </div>

                {/* Image 3  */}
                <div className="ml-auto flex max-w-[250px] justify-end overflow-hidden">
                  <Image
                    src={images.image3.src}
                    alt={images.image4.alt}
                    width={images.image3.width}
                    height={images.image3.height}
                    className="rounded-[50px_10px] object-cover"
                    data-aos="fade-left"
                    data-aos-delay="350"
                  />
                </div>

                {/* Image 4 */}
                <div className="overflow-hidden">
                  <Image
                    src={images.image4.src}
                    alt={images.image4.alt}
                    width={images.image4.width}
                    height={images.image4.height}
                    className="rounded-10 rounded-br-[80px] object-cover"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  />
                </div>

                <div className="absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                  <div data-aos="zoom-in" data-aos-delay="450">
                    <span className="grid h-[100px] w-[100px]  place-items-center rounded-full border-[12px] border-white bg-primary text-[30px] text-white">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 27 27"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M26.8125 13.8672C26.8125 14.9922 25.875 15.9297 24.8125 15.9297H15.8125V24.9297C15.8125 25.9922 14.875 26.8672 13.8125 26.8672C12.6875 26.8672 11.8125 25.9922 11.8125 24.9297V15.9297H2.8125C1.6875 15.9297 0.8125 14.9922 0.8125 13.8672C0.8125 12.8047 1.6875 11.9297 2.8125 11.9297H11.8125V2.92969C11.8125 1.80469 12.6875 0.867188 13.8125 0.867188C14.875 0.867188 15.8125 1.80469 15.8125 2.92969V11.9297H24.8125C25.875 11.8672 26.8125 12.8047 26.8125 13.8672Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
