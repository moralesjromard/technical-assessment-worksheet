import { Nav } from "@/components/Nav";

interface ActivitiesLayoutProps {
  children: React.ReactNode;
}

const ActivitiesLayout = ({ children }: ActivitiesLayoutProps) => {
  return (
    <section className="h-full w-full flex flex-col justify-start items-start bg-gradient-to-br from-gray-900 to-black overflow-y-auto">
      <Nav />
      <main className="flex-1 w-full flex justify-center items-center">
        {children}
      </main>
    </section>
  );
};
export default ActivitiesLayout;
