import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden cyber-glow-card rounded-2xl h-full border border-black/[0.04] dark:border-white/[0.05] transition-all duration-300 ease-out"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden relative group/img aspect-video", className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 flex items-end p-3">
          <span className="text-white text-[10px] tracking-widest uppercase font-mono font-bold flex items-center gap-1">
            [ VER DETALLES <span className="text-emerald-400">➔</span> ]
          </span>
        </div>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full overflow-hidden object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
          />
        )}
      </Link>
      <CardHeader className="px-4 pt-4 pb-2 space-y-1">
        <div className="flex items-center justify-between gap-1 flex-wrap">
          <CardTitle className="text-base sm:text-lg font-bold tracking-tight text-foreground dark:text-white dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </CardTitle>
          <time className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-muted-foreground tracking-tighter">
            {dates}
          </time>
        </div>
        <div className="hidden font-sans text-xs underline print:visible">
          {link?.replace("https://", "").replace("www.", "").replace("/", "")}
        </div>
        <div className="pt-1.5">
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:text-neutral-400 dark:prose-invert leading-relaxed">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4 pb-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[9px] font-mono tracking-tight bg-black/[0.03] dark:bg-emerald-500/5 text-muted-foreground dark:text-emerald-400/90 border border-black/5 dark:border-emerald-500/10 hover:bg-black/5 dark:hover:bg-emerald-500/10 transition-colors"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-1.5">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank" className="inline-flex">
                <Badge key={idx} className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wide bg-primary/90 text-primary-foreground hover:bg-primary transition-all duration-200 shadow-sm rounded-md cursor-pointer">
                  {link.icon}
                  <span>{link.type}</span>
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
