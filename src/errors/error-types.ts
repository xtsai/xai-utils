export type LocaleType = 'enUS' | 'zhCN' | 'zhTW' | string;

export type BizErrorOptionType = {
  locale?: LocaleType;
  error?: string | string[];
} & Record<string, string | number>;
