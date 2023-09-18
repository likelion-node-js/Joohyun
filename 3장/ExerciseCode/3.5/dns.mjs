import dns from "dns/promises";

// ip주소는 간단하게 dns.lookup이나 dns.resolve로 확인할 수 있다.
const ip = await dns.lookup("gilbut.co.kr");
console.log("IP", ip);

// A(ipv4 주소), AAAA(ipv6 주소)
const a = await dns.resolve("gilbut.co.kr", "A");
console.log("A", a);

// MX(메일 서버)
const mx = await dns.resolve("gilbut.co.kr", "MX");
console.log("MX", mx);

// CNAME(별칭, 보통 www가 붙은 주소는 별칭인 경우가 많다.)
const cname = await dns.resolve("www.gilbut.co.kr", "CNAME");
console.log("CNAME", cname);

const any = await dns.resolve("gilbut.co.kr", "ANY");
console.log("ANY", any);
