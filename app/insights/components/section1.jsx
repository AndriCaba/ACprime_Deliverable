/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { articles } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { IoNavigate } from 'react-icons/io5';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import Link from 'next/link';
import Image from 'next/image';
const Section1 = () => {
  const [activeItem, setActiveItem] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filter, setFilter] = useState('Newest');
  const menuRef = useRef(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const mainTags = ['All', 'Announcements', 'Articles'];
  const smartTags = [
    'Reports',
    'Wealth Creation',
    'Financial Wellness',
    'Insurance and Risk',
    'Industry Trends',
    'Insurance Commission',
  ];

  useEffect(() => {
    if (!menuRef.current) return;
    const menuItems = Array.from(
      menuRef.current.getElementsByClassName('filter-menu')
    );

    if (menuItems.length === 0) return;

    let activeMenuItemWidth = 0;
    let leftPosition = 0;
    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      if (item.textContent === activeItem) {
        activeMenuItemWidth = item.offsetWidth;
        break;
      }
      leftPosition += item.offsetWidth;
    }
    setIndicatorWidth(activeMenuItemWidth);
    setIndicatorLeft(leftPosition);
  }, [activeItem, menuRef]);

  const handleToggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredArticles = articles
    .filter((article) => {
      if (activeItem !== 'All' && article.type !== activeItem) {
        return false;
      }
      if (selectedTags.length > 0) {
        return selectedTags.every((tag) => article.tags.includes(tag));
      }
      return true;
    })
    .sort((a, b) => {
      if (filter === 'Newest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });
  return (
    <div className="relative bg-navy-500/20">
      <h1 className="py-12 text-center text-4xl font-semibold lg:text-5xl">
        Articles and Insights
      </h1>
      <div className="container px-0 pb-12">
        <div className="mx-6 flex flex-col-reverse items-center border-b border-navy-100/20 md:flex-row md:justify-between lg:mx-0">
          <div ref={menuRef} className="relative flex w-full text-navy-100">
            {mainTags.map((mainTag, index) => (
              <div
                key={index}
                className={`filter-menu relative cursor-pointer px-4 py-3 text-sm hover:bg-primary/10 lg:text-base ${activeItem === mainTag ? 'text-primary' : ''}`}
                onClick={() => handleItemClick(mainTag)}
              >
                {mainTag}
              </div>
            ))}
            <div
              className="navpu__indicator absolute -bottom-[2px] left-0 z-30 h-[3px] rounded-lg bg-primary transition"
              style={{
                left: `${indicatorLeft}px`,
                width: `${indicatorWidth}px`,
                transition: 'all .3s ease',
              }}
            ></div>
          </div>
        </div>
        <div className="mt-6 rounded bg-navy-400/10 px-6 py-12 lg:px-16">
          <div className="flex flex-col items-end justify-between gap-2 border-b border-navy-100 pb-6 md:flex-row">
            <ToggleGroup className="flex flex-wrap gap-2" type="multiple">
              {smartTags.map((tag, index) => (
                <ToggleGroupItem
                  key={index}
                  value={tag}
                  className="h-auto rounded border border-navy-300 px-2 py-1.5 text-xs font-normal text-navy-200 hover:border-navy-300 hover:bg-navy-300/20 data-[state=on]:bg-navy-300 data-[state=on]:text-secondary lg:text-sm"
                  onClick={() => handleToggleTag(tag)}
                >
                  {tag}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <Select onValueChange={setFilter}>
              <SelectTrigger className="z-20 w-full max-w-[8rem] whitespace-nowrap border-0 bg-transparent p-0 text-xs font-light text-[#156CB9] data-[placeholder]:text-navy-100/80 sm:text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-light text-navy-100/80">Sort By:</span>
                  <SelectValue placeholder={<div>{filter}</div>} />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Newest">Newest</SelectItem>
                  <SelectItem value="Oldest">Oldest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="my-2 text-sm font-light text-navy-100">
            <span>
              {filteredArticles.length} result
              {filteredArticles.length !== 1 ? 's' : ''} shown
            </span>
          </div>
          <div className="shadow-lg mx-auto mt-10 grid max-w-[64rem] grid-cols-1 justify-items-center gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <Link
                key={index}
                href={article.pdf ? article.pdf : `/insights/${article.id}`}
                className="custom-shadow group h-full w-full max-w-[20rem] rounded hover:-translate-y-1"
                target={article.pdf ? '_blank' : '_self'}
              >
                <Card className="overflow-hidden rounded-b-none rounded-t border-0 bg-[#156CB9] pb-6">
                  <div className="flex h-auto w-full items-center p-4 pb-1">
                    <Image
                      src={article.img}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="rounded bg-secondary"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                  <CardContent className="relative flex flex-col items-center justify-center p-2 px-4">
                    <div className="flex w-full justify-start gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="border border-secondary px-2 py-1 text-[10px] text-secondary"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <h2 className="mb-1 mt-1.5 w-full text-start text-[11px] font-semibold text-white lg:text-xs">
                      {article.date}
                    </h2>
                    <div className="h-24 text-secondary">
                      <h3 className="mb-3.5 line-clamp-2 text-sm font-semibold leading-tight lg:leading-tight">
                        {article.title}
                      </h3>
                      <p className="line-clamp-3 text-xs">
                        {article.description}
                      </p>
                    </div>
                    <div className="absolute -bottom-8 -right-2">
                      <Image
                        src="/images/articles/fold_paper.png"
                        alt="fold"
                        width={40}
                        height={40}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
