import React from 'react';

interface AccessProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  linkClassName?: string;
}

const Access: React.FC<AccessProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  containerClassName = 'w-[358.19px] h-[361.33px] py-[32px] pr-[50px] pl-[24px] text-[#FFFFFF]',
  titleClassName = 'text-[#FEFCE8] text-[26px] font-bold leading-31.82px',
  descriptionClassName = 'w-[289px] h-[84px] font-normal text-base leading-7',
  linkClassName = 'font-bold text-base leading-[27.93px]'
}) => {
  return (
    <div className={containerClassName}>
      <img src={icon} alt="Icon" />
      <div className="flex flex-col gap-8">
        <h4 className={titleClassName}>{title}</h4>
        <p className={descriptionClassName}>{description}</p>
        <a href={linkHref} className={linkClassName}>{linkText}</a>
      </div>
    </div>
  );
};

export default Access;
