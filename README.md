# The Math of Parallax

A visual explainer of the parallax scrolling effect — pure HTML, CSS, and JS. No frameworks, no dependencies.

## How it works

Each layer gets a `depth` multiplier between 0 and 1:

```
translateY = -(scrollY × speed)
```

Lower speed = further away = slower movement. The browser reads the speed difference between layers as depth.

| Layer          | Speed |
| -------------- | ----- |
| Stars & Moon   | 2%    |
| Sky            | 8%    |
| Far Mountains  | 18%   |
| Near Mountains | 38%   |
| Ground         | 60%   |
