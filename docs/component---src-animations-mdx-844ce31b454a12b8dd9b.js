(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Qf1I:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return o}));t("4cIV"),t("NZyX"),t("c0Gx"),t("QNbk"),t("+ytS"),t("WY76");var a=t("V0Ug"),c=t("sN0p");t("xH0s");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/animations.mdx"}});var s={_frontmatter:b},r=c.a;function o(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(a.b)(r,l({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"animations"},"Animations"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usevalue"},Object(a.b)("inlineCode",{parentName:"h2"},"useValue()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useValue: <V extends string | number | boolean>(value: V, deps: Dependencies) => Animated.Value<V>;\n")),Object(a.b)("p",null,"Creates an animation value which identity is preserved by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"useclock"},Object(a.b)("inlineCode",{parentName:"h2"},"useClock()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useClock: (deps: Dependencies) => Animated.Clock;\n")),Object(a.b)("p",null,"Creates a clock which identity is preserved by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usevector"},Object(a.b)("inlineCode",{parentName:"h2"},"useVector()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useVector: (x: number, y: number, deps: Dependencies) => Vector<Animated.Value>;\n")),Object(a.b)("p",null,"Creates a vector which identity is preserved by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usevalues"},Object(a.b)("inlineCode",{parentName:"h2"},"useValues()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useValues: <V extends string | number | boolean>(values: V[], deps: Dependencies) => Animated.Value<V>[];\n")),Object(a.b)("p",null,"Create animation values which lifecycle is granted by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),".\nFor instance the code snippet below:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [toggle, state] = useValues([0, State.UNDETERMINED], []);\n")),Object(a.b)("p",null,"is a shortcut for"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [toggle state] = useMemoOne(() => [new Value(0), new Value(State.UNDETERMINED)], []);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"useclocks"},Object(a.b)("inlineCode",{parentName:"h2"},"useClocks()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useClocks: (numberOfClocks: number, deps: Dependencies) => Animated.Clock[];\n")),Object(a.b)("p",null,"Create a number of clocks which lifecycle is granted by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),". For instance the code snippet below:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [clock1, clock2, clock3] = useClocks(3, []);\n")),Object(a.b)("p",null,"is a shortcut for"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [clock1, clock2, clock3] = useMemoOne(() => [new Clock(), new Clock(), new Clock()], []);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usediff"},Object(a.b)("inlineCode",{parentName:"h2"},"useDiff()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useDiff: (node: Animated.Node<number>, deps: Dependencies) => Animated.Value<number>;\n")),Object(a.b)("p",null,"Returns a difference between the node value from the last frame and the current one.\n",Object(a.b)("inlineCode",{parentName:"p"},"useDiff")," works for every frame whereas ",Object(a.b)("inlineCode",{parentName:"p"},"diff")," works on every evaluation."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"snappoint"},Object(a.b)("inlineCode",{parentName:"h2"},"snapPoint()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const snapPoint: (value: Animated.Adaptable<number>, velocity: Animated.Adaptable<number>, points: Animated.Adaptable<number>[]) => Animated.Adaptable<number>;\n")),Object(a.b)("p",null,"Select a point based on a node value and its velocity."))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/animations.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-animations-mdx-844ce31b454a12b8dd9b.js.map