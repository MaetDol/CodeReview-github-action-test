(()=>{"use strict";var e={n:n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},d:(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};const n=require("node:path");var r=e.n(n);const t=require("node:fs");var a=e.n(t);function o(e){const n=n=>r().resolve(e,n);return a().readdirSync(e).filter((e=>c(n(e)))).map(n)}function c(e){try{return a().lstatSync(e).isDirectory()}catch(e){return!1}}const i=require("node:child_process");var l=e.n(i);function s(e){try{const n=r().resolve(e,"package.json"),t=a().readFileSync(n).toString();return JSON.parse(t)}catch(e){return null}}function u(e){const{readme:n,fullpath:t}=function(e){const n=r().resolve(e,"readme.md");let t;try{t=a().readFileSync(n).toString()}catch(e){return{}}return{fullpath:n,readme:t}}(e);if(!t)return;const c=o(e).map((e=>({fullpath:e,packageJson:s(e)})));c.filter((e=>e.packageJson)).map((e=>(function(e){l().execSync(`npm --prefix="${e}" ci`),l().execSync(`npm --prefix="${e}" run build`)}(e.fullpath),e))).filter((e=>!1!==e.packageJson.deploy)).forEach((e=>function(e){const n=["build",".next","dist"],t=a().readdirSync(e).find((e=>n.includes(e)));l().execSync(`mv ${r().resolve(e,t,"*")} ${e}`)}(e.fullpath)));const i=c.filter((({packageJson:e})=>!1!==e?.deploy)).map((e=>r().basename(e.fullpath))),u=`https://awesome-tomato.github.io/CodeReview/${r().basename(e)}`,p="\n"+i.map((e=>`- [${e}](${u}/${e}/index.html)`)).join("\n")+"\n\n";var d,f;d=t,f=n.replace(/(?<=## 배포링크(\n|\r\n))(\n|\r\n)((- .+(\n|\r\n))*)/,p),a().writeFileSync(d,f)}o(r().resolve(__dirname,"./")).filter(c).forEach(u)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vYnVpbGQtYWxsLXN1Yi1kaXJlY3Rvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVpbGQtYWxsLXN1Yi1kaXJlY3Rvcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYnVpbGQtYWxsLXN1Yi1kaXJlY3Rvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2J1aWxkLWFsbC1zdWItZGlyZWN0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnVpbGQtYWxsLXN1Yi1kaXJlY3RvcnkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6cGF0aFwiIiwid2VicGFjazovL2J1aWxkLWFsbC1zdWItZGlyZWN0b3J5L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOmZzXCIiLCJ3ZWJwYWNrOi8vYnVpbGQtYWxsLXN1Yi1kaXJlY3RvcnkvLi9zcmMvbGlicy9maWxlU3lzdGVtLmpzIiwid2VicGFjazovL2J1aWxkLWFsbC1zdWItZGlyZWN0b3J5L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOmNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly9idWlsZC1hbGwtc3ViLWRpcmVjdG9yeS8uL3NyYy9saWJzL3Byb2plY3RFeHBsb3Jlci5qcyIsIndlYnBhY2s6Ly9idWlsZC1hbGwtc3ViLWRpcmVjdG9yeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJub2RlOnBhdGhcIik7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJub2RlOmZzXCIpOyIsImltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWJzb2x1dGVQYXRoIGFic29sdXRlIHBhdGggZm9yIHJlYWQgZGlyZWN0b3JpZXNcclxuICogQHJldHVybnMge3N0cmluZ1tdfSBzdWItZGlyZWN0b3J5J3MgYWJzb2x1dGUgcGF0aHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkRGlyZWN0b3JpZXNBc0Z1bGxQYXRoKGFic29sdXRlUGF0aCkge1xyXG4gIGNvbnN0IHJlc29sdmVUb0Fic29sdXRlUGF0aCA9IChwKSA9PiBwYXRoLnJlc29sdmUoYWJzb2x1dGVQYXRoLCBwKTtcclxuICBjb25zdCBjb250ZW50cyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlUGF0aCk7XHJcbiAgcmV0dXJuIGNvbnRlbnRzXHJcbiAgICAuZmlsdGVyKChuYW1lKSA9PiBwYXRoSXNEaXJlY3RvcnkocmVzb2x2ZVRvQWJzb2x1dGVQYXRoKG5hbWUpKSlcclxuICAgIC5tYXAocmVzb2x2ZVRvQWJzb2x1dGVQYXRoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhYnNvbHV0ZVBhdGhcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGF0aElzRGlyZWN0b3J5KGFic29sdXRlUGF0aCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZnMubHN0YXRTeW5jKGFic29sdXRlUGF0aCkuaXNEaXJlY3RvcnkoKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGFic29sdXRlUGF0aFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpIHtcclxuICB0cnkge1xyXG4gICAgZnMubWtkaXJTeW5jKGFic29sdXRlUGF0aCk7XHJcbiAgfSBjYXRjaCAoZSkge31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmdWxscGF0aCwgc3RyKSB7XHJcbiAgZnMud3JpdGVGaWxlU3luYyhmdWxscGF0aCwgc3RyKTtcclxufVxyXG4iLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcIm5vZGU6Y2hpbGRfcHJvY2Vzc1wiKTsiLCJpbXBvcnQgZnMgZnJvbSAnbm9kZTpmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XHJcbmltcG9ydCBjaGlsZFByb2Nlc3MgZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWNrYWdlSnNvbihwcm9qZWN0UGF0aCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYWNrYWdlSnNvblBhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFBhdGgsICdwYWNrYWdlLmpzb24nKTtcclxuICAgIGNvbnN0IGpzb24gPSBmcy5yZWFkRmlsZVN5bmMocGFja2FnZUpzb25QYXRoKS50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuQnVpbGRDb21tYW5kQXQocHJvamVjdFBhdGgpIHtcclxuICBjaGlsZFByb2Nlc3MuZXhlY1N5bmMoYG5wbSAtLXByZWZpeD1cIiR7cHJvamVjdFBhdGh9XCIgY2lgKTtcclxuICBjaGlsZFByb2Nlc3MuZXhlY1N5bmMoYG5wbSAtLXByZWZpeD1cIiR7cHJvamVjdFBhdGh9XCIgcnVuIGJ1aWxkYCk7XHJcbiAgcmV0dXJuIHByb2plY3RQYXRoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92ZUJ1aWxkT3V0cHV0SW50b0ltcGxlbWVudERpcmVjdG9yeShwcm9qZWN0UGF0aCkge1xyXG4gIGNvbnN0IHBvc3NpYmxlQnVpbGREaXJlY3RvcnkgPSBbJ2J1aWxkJywgJy5uZXh0JywgJ2Rpc3QnXTtcclxuICBjb25zdCBzdWJEaXJlY3RvcmllcyA9IGZzLnJlYWRkaXJTeW5jKHByb2plY3RQYXRoKTtcclxuXHJcbiAgY29uc3QgYnVpbGREaXJlY3RvcnkgPSBzdWJEaXJlY3Rvcmllcy5maW5kKChkaXIpID0+XHJcbiAgICBwb3NzaWJsZUJ1aWxkRGlyZWN0b3J5LmluY2x1ZGVzKGRpcilcclxuICApO1xyXG4gIGNoaWxkUHJvY2Vzcy5leGVjU3luYyhcclxuICAgIGBtdiAke3BhdGgucmVzb2x2ZShwcm9qZWN0UGF0aCwgYnVpbGREaXJlY3RvcnksICcqJyl9ICR7cHJvamVjdFBhdGh9YFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFkbWVBdChwcm9qZWN0UGF0aCkge1xyXG4gIGNvbnN0IGZ1bGxwYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RQYXRoLCAncmVhZG1lLm1kJyk7XHJcbiAgbGV0IHJlYWRtZTtcclxuICB0cnkge1xyXG4gICAgcmVhZG1lID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxwYXRoKS50b1N0cmluZygpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGZ1bGxwYXRoLCByZWFkbWUgfTtcclxufVxyXG4iLCJpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQge1xyXG4gIHBhdGhJc0RpcmVjdG9yeSxcclxuICByZWFkRGlyZWN0b3JpZXNBc0Z1bGxQYXRoLFxyXG4gIHdyaXRlRmlsZSxcclxufSBmcm9tICcuL2xpYnMvZmlsZVN5c3RlbSc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0UGFja2FnZUpzb24sXHJcbiAgZ2V0UmVhZG1lQXQsXHJcbiAgbW92ZUJ1aWxkT3V0cHV0SW50b0ltcGxlbWVudERpcmVjdG9yeSxcclxuICBydW5CdWlsZENvbW1hbmRBdCxcclxufSBmcm9tICcuL2xpYnMvcHJvamVjdEV4cGxvcmVyJztcclxuXHJcbnJ1bigpO1xyXG5cclxuZnVuY3Rpb24gcnVuKCkge1xyXG4gIGNvbnN0IHJvb3QgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi8nKTtcclxuICBjb25zdCBwcm9qZWN0UGF0aHMgPSByZWFkRGlyZWN0b3JpZXNBc0Z1bGxQYXRoKHJvb3QpLmZpbHRlcihwYXRoSXNEaXJlY3RvcnkpO1xyXG5cclxuICAvLyBUT0RPOiDqsIEg7ZSE66Gc7KCd7Yq4IOq1rO2YhO2PtOuNlOulvCDrj4zrlYwg7Iuk7ZaJ7ZWY64qUIOy9lOuTnCDrs4Trj4Qg7ZWo7IiY66GcIOu2hOumrO2VmOq4sFxyXG4gIC8vIFRPRE86IOumrO2Mqe2GoOungeydtCDqvK0g7ZWE7JqU7ZWoIC0g67Cw7Y+s7ZW07JW87ZWY64qU7KeAIO2ZleyduO2VmOuKlCDrtoDrtoTsnbQg7KCV66as6rCAIO2VhOyalO2VqFxyXG4gIHByb2plY3RQYXRocy5mb3JFYWNoKGJ1aWxkVGhlbkRlcGxveUFsbEltcGxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVGhlbkRlcGxveUFsbEltcGxlbWVudChwcm9qZWN0UGF0aCkge1xyXG4gIGNvbnN0IHsgcmVhZG1lLCBmdWxscGF0aDogcmVhZG1lUGF0aCB9ID0gZ2V0UmVhZG1lQXQocHJvamVjdFBhdGgpO1xyXG4gIGlmICghcmVhZG1lUGF0aCkgcmV0dXJuO1xyXG5cclxuICAvLyDtlITroZzsoJ3tirjrpbwg6rWs7ZiE7ZWcIOyEnOu4jCDrlJTroInthqDrpqwg7Yyo7Iqk7JmAIHBhY2thZ2UuanNvbuydhCDqsIDsoLjsmKjri6RcclxuICBjb25zdCBwcm9qZWN0SW1wbGVtZW50UGF0aHMgPSByZWFkRGlyZWN0b3JpZXNBc0Z1bGxQYXRoKHByb2plY3RQYXRoKTtcclxuICBjb25zdCBpbXBsZW1lbnRJdGVtcyA9IHByb2plY3RJbXBsZW1lbnRQYXRocy5tYXAoKGZ1bGxwYXRoKSA9PiAoe1xyXG4gICAgZnVsbHBhdGgsXHJcbiAgICBwYWNrYWdlSnNvbjogZ2V0UGFja2FnZUpzb24oZnVsbHBhdGgpLFxyXG4gIH0pKTtcclxuXHJcbiAgLy8gcGFja2FnZS5qc29uIOydtCDsnojripQg7ISc67iMIOuUlOugie2GoOumrOulvCDruYzrk5ztlZjqs6BcclxuICAvLyDqsrDqs7zrrLwg7Y+0642U66W8IOyYruq4tOuLpFxyXG4gIGltcGxlbWVudEl0ZW1zXHJcbiAgICAuZmlsdGVyKChpbXBsZW1lbnQpID0+IGltcGxlbWVudC5wYWNrYWdlSnNvbilcclxuICAgIC5tYXAoKGltcGxlbWVudCkgPT4ge1xyXG4gICAgICBydW5CdWlsZENvbW1hbmRBdChpbXBsZW1lbnQuZnVsbHBhdGgpO1xyXG4gICAgICByZXR1cm4gaW1wbGVtZW50O1xyXG4gICAgfSlcclxuICAgIC5maWx0ZXIoKGltcGxlbWVudCkgPT4gaW1wbGVtZW50LnBhY2thZ2VKc29uLmRlcGxveSAhPT0gZmFsc2UpXHJcbiAgICAuZm9yRWFjaCgoaW1wbGVtZW50KSA9PlxyXG4gICAgICBtb3ZlQnVpbGRPdXRwdXRJbnRvSW1wbGVtZW50RGlyZWN0b3J5KGltcGxlbWVudC5mdWxscGF0aClcclxuICAgICk7XHJcblxyXG4gIC8vIOuwsO2PrOunge2BrCDsg53shLEg67CPIHJlYWRtZSDsl5Ag7KCB7JqpXHJcbiAgY29uc3QgaW1wbGVtZW50RGlyZWN0b3J5TmFtZXMgPSBpbXBsZW1lbnRJdGVtc1xyXG4gICAgLmZpbHRlcigoeyBwYWNrYWdlSnNvbiB9KSA9PiBwYWNrYWdlSnNvbj8uZGVwbG95ICE9PSBmYWxzZSlcclxuICAgIC5tYXAoKGltcGxlbWVudCkgPT4gcGF0aC5iYXNlbmFtZShpbXBsZW1lbnQuZnVsbHBhdGgpKTtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IHBhdGguYmFzZW5hbWUocHJvamVjdFBhdGgpO1xyXG4gIGNvbnN0IFBST0pFQ1RfQkFTRV9VUkwgPSBgaHR0cHM6Ly9hd2Vzb21lLXRvbWF0by5naXRodWIuaW8vQ29kZVJldmlldy8ke3Byb2plY3ROYW1lfWA7XHJcbiAgY29uc3QgZGVwbG95TGlzdCA9XHJcbiAgICAnXFxuJyArXHJcbiAgICBpbXBsZW1lbnREaXJlY3RvcnlOYW1lc1xyXG4gICAgICAubWFwKChuYW1lKSA9PiBgLSBbJHtuYW1lfV0oJHtQUk9KRUNUX0JBU0VfVVJMfS8ke25hbWV9L2luZGV4Lmh0bWwpYClcclxuICAgICAgLmpvaW4oJ1xcbicpICtcclxuICAgICdcXG5cXG4nO1xyXG5cclxuICBjb25zdCBkZXBsb3lMaXN0U2VsZWN0UmVnZXggPVxyXG4gICAgLyg/PD0jIyDrsLDtj6zrp4HtgawoXFxufFxcclxcbikpKFxcbnxcXHJcXG4pKCgtIC4rKFxcbnxcXHJcXG4pKSopLztcclxuICB3cml0ZUZpbGUocmVhZG1lUGF0aCwgcmVhZG1lLnJlcGxhY2UoZGVwbG95TGlzdFNlbGVjdFJlZ2V4LCBkZXBsb3lMaXN0KSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGUiLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVxdWlyZSIsInJlYWREaXJlY3Rvcmllc0FzRnVsbFBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJyZXNvbHZlVG9BYnNvbHV0ZVBhdGgiLCJwIiwiZmlsdGVyIiwibmFtZSIsInBhdGhJc0RpcmVjdG9yeSIsIm1hcCIsImlzRGlyZWN0b3J5IiwiZSIsImdldFBhY2thZ2VKc29uIiwicHJvamVjdFBhdGgiLCJwYWNrYWdlSnNvblBhdGgiLCJqc29uIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJidWlsZFRoZW5EZXBsb3lBbGxJbXBsZW1lbnQiLCJyZWFkbWUiLCJmdWxscGF0aCIsInJlYWRtZVBhdGgiLCJnZXRSZWFkbWVBdCIsImltcGxlbWVudEl0ZW1zIiwicGFja2FnZUpzb24iLCJpbXBsZW1lbnQiLCJydW5CdWlsZENvbW1hbmRBdCIsImRlcGxveSIsImZvckVhY2giLCJwb3NzaWJsZUJ1aWxkRGlyZWN0b3J5IiwiYnVpbGREaXJlY3RvcnkiLCJmaW5kIiwiZGlyIiwiaW5jbHVkZXMiLCJtb3ZlQnVpbGRPdXRwdXRJbnRvSW1wbGVtZW50RGlyZWN0b3J5IiwiaW1wbGVtZW50RGlyZWN0b3J5TmFtZXMiLCJQUk9KRUNUX0JBU0VfVVJMIiwiZGVwbG95TGlzdCIsImpvaW4iLCJzdHIiLCJyZXBsYWNlIiwiX19kaXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==