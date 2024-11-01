import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  const arr = new Array(12).fill(0);

  return (
    <>
      <Skeleton className="md:h-[40rem] h-[33rem]" />
      <section className="md:px-8 px-4 py-14 ">
        <Skeleton className="h-5 mb-5 inline-block w-[100px]" />
        <Skeleton className="h-10 w-[350px] block mb-8" />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-10 gap-6">
          {arr.map((_, index) => (
            <div className="flex flex-col space-y-3 w-full" key={index}>
              <Skeleton className="h-[250px] w-full rounded-xl" />
              <div className="mb-2 flex justify-between items-center gap-3">
                <Skeleton className="h-4 w-full block" />
                <Skeleton className="h-4 w-full block" />
              </div>
              <div className="mb-2 flex justify-between items-center gap-3">
                <Skeleton className="h-4 w-full block" />
                <Skeleton className="h-4 w-full block" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Loading;
