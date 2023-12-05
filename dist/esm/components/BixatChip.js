import React from "react";
export var BixatChip = function (_a) {
    var tag = _a.tag, link = _a.link, withTitle = _a.withTitle;
    var colorWithOpacity = "rgba(".concat(parseInt(tag.textColor.slice(1, 3), 16), ", ").concat(parseInt(tag.textColor.slice(3, 5), 16), ", ").concat(parseInt(tag.textColor.slice(5, 7), 16), ", 0.15)");
    return (React.createElement("a", { href: link !== null && link !== void 0 ? link : tag.website, target: "_blank", className: "rounded-full hover:scale-110" },
        React.createElement("div", { className: "flex flex-row shadow-md  gap-1 rounded-full items-center justify-evenly px-2 py-0.5", style: { backgroundColor: colorWithOpacity } },
            React.createElement("p", null, tag.icon),
            (withTitle ? React.createElement("p", { style: { color: tag.textColor, fontWeight: "bold" } }, tag.name) : ""))));
};
//# sourceMappingURL=BixatChip.js.map