import { RiArrowRightSLine } from 'react-icons/ri';

export default function HeroBanner() {
  return (
    <section className="mt-6 flex h-[520px] w-full bg-amber-200">
      <div className="mt-auto mb-auto ml-12 flex w-1/2 flex-col">
        <p className="italic">jdkjkdjasjd kdlaksdj</p>
        <h1 className="font-serif text-7xl">Lorem Ipsum lorem dasdkj nsjda</h1>
        <p className="mt-6">mdalkjwkd dmnasnd dkawjdawkld ndwkmd mklwdklkwdk nkdnans f efkjfn nkasd dankwndklnad sndklandan wndjawnda and asnd a dn a d</p>
        <div className="mt-10 flex gap-6">
          <button className="flex w-fit items-center border-1 border-amber-600 bg-amber-600 pt-1 pr-4 pb-1 pl-4 cursor-pointer">
            more info <RiArrowRightSLine className="h-4 w-4" />
          </button>
          <button className="flex w-fit items-center border-1 border-amber-600 pt-1 pr-4 pb-1 pl-4 cursor-pointer">
            another info <RiArrowRightSLine className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-8 mr-12 mb-8 flex w-1/2">
        <div className="m-auto h-7/8 w-7/8 bg-amber-700"></div>
      </div>
    </section>
  );
}
