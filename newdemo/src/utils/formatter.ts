/* 元转成分*/
export function yuan2Fen(value: any): string {
  // eslint-disable-next-line
    const re = /^[\+|-]?\d+(\.\d+)?$/;
  let valueStr: string;
  if (typeof value !== 'string') {
    valueStr = value ? value.toString() : '0';
  } else {
    valueStr = value ? value : '0';
  }
  return re.test(valueStr) ? (parseFloat(valueStr) * 100).toFixed(0) : '0';
}

/* 分转成元*/
export function fen2Yuan(value: any, fix?: number): string  {
  // eslint-disable-next-line
    const re = /^[\+|-]?[0-9]+$/;
  let valueStr: string;
  if (typeof value !== 'string') {
    valueStr = value ? value.toString() : '0';
  } else {
    valueStr = value ? value : '0';
  }
  return re.test(valueStr) ? (parseFloat(valueStr) / 100).toFixed(fix || 2) : '0.00';
}

export function formatMoney(val: number): string {
  const n = 2;
  if (val === 0) return '0';
  const s = val / 100;
  // eslint-disable-next-line
  const s2 = `${parseFloat((`${s}`).replace(/[^\d\.-]/g, '')).toFixed(n)}`;
  const l = s2.split('.')[0].split('').reverse(); const r = s2.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
  }
  return `${t.split('').reverse()
    .join('')}.${r}`;
}

/* 精确加法*/
export function accAdd(arg1: number, arg2: number) {
  let r1; let r2;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  const c = Math.abs(r1 - r2);
  const m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    const cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', '')) * cm;
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm;
      arg2 = Number(arg2.toString().replace('.', ''));
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''));
    arg2 = Number(arg2.toString().replace('.', ''));
  }
  return (arg1 + arg2) / m;
}
/* 精确减法*/
export function  accSub(arg1: number, arg2: number) {
  let r1; let r2;;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = Math.pow(10, Math.max(r1, r2)); // last modify by deeka //动态控制精度长度
  const n = r1 >= r2 ? r1 : r2;
  try {
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  } catch (e) {
    const tmp = (arg1 * m - arg2 * m) / m; // 上面的方案有可能tmp的小数位数小于n位，手机端就会跳过
    return tmp.toFixed(tmp.toString().split('.')[1].length - 1);
  }
}
/* 精确乘法*/
export function  accMul(arg1: number, arg2: number) {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}
/* 精确除法*/
export function accDiv(arg1: number, arg2: number) {
  let t1 = 0;
  let t2 = 0;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {}
  const r1 = Number(arg1.toString().replace('.', ''));
  const r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}


