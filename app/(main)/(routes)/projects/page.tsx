import ShortSidebar from "@/components/sidebar/shortSidebar";
import Header from "@/components/header/header";
import LongSidebar from "@/components/sidebar/longSidebar";
import Content from "@/components/content/content";

export default function Page() {
  return (
    <div className="bg-[#F3F6FD] h-full">
      <Header />
      <div className="flex h-full">
        <ShortSidebar />
        <LongSidebar />
        <Content />
      </div>
    </div>
  )
}
