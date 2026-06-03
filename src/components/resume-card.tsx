"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  target?: string;
  rel?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  target,
  rel,
  isExpanded: isExpandedProp,
  onToggle,
}: ResumeCardProps) => {
  const [isExpandedLocal, setIsExpandedLocal] = React.useState(false);
  const isExpanded = isExpandedProp !== undefined ? isExpandedProp : isExpandedLocal;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      if (onToggle) {
        onToggle();
      } else {
        setIsExpandedLocal(!isExpandedLocal);
      }
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer group"
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      <Card className={cn(
        "flex min-h-0 items-start p-4 sm:p-5 cyber-glow-card rounded-2xl border border-black/[0.04] dark:border-white/[0.05] transition-all duration-300 ease-out",
        isExpanded ? "dark:border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.04)]" : ""
      )}>
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-white dark:bg-zinc-900 border-black/5 dark:border-white/10 shadow-sm">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1"
            />
            <AvatarFallback className="font-mono text-sm font-bold bg-muted text-muted-foreground">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 flex flex-col">
          <CardHeader className="p-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-1 gap-x-2 text-base">
              <h3 className="font-bold leading-tight text-sm sm:text-base text-foreground dark:text-white dark:group-hover:text-emerald-400 transition-colors">
                {description && (
                  <span
                    className={cn(
                      "inline-flex items-center align-middle mr-1.5 p-0.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground transition-transform duration-300",
                      isExpanded ? "rotate-90 text-emerald-500 dark:text-emerald-400" : "group-hover:translate-x-0.5"
                    )}
                    title="Haz clic para ver más detalles"
                  >
                    <ChevronRightIcon className="size-4 inline-block" />
                  </span>
                )}
                <span>{title}</span>
                {badges && badges.length > 0 && (
                  <span className="inline-flex gap-x-1 ml-1.5 align-middle">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[9px] font-mono font-normal tracking-tight px-1.5 py-0 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 border border-emerald-500/10"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </h3>
              <div className="text-xs font-mono text-muted-foreground sm:text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-1">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ overflow: "hidden" }}
              className="text-xs sm:text-sm"
            >
              <div className="pt-3 text-muted-foreground dark:text-neutral-300 font-sans leading-relaxed border-t border-black/[0.03] dark:border-white/[0.04] mt-3">
                {description.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < description.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
