!function(){"undefined"!=typeof angular&&angular.module("bsTable",[]).constant("uiBsTables",{bsTables:{}}).directive("bsTableControl",["uiBsTables",function(t){function e(t){var e;return $.each(l,function(a,s){if(s.$el.closest(o).has(t).length)return e=s,!0}),e}function a(){var t=this,e=t.$s.bsTableControl.state;t.$s.$applyAsync(function(){e.scroll=t.$el.bootstrapTable("getScrollPosition")})}var o=".bootstrap-table",s=".fixed-table-body",n=".search input",l=t.bsTables;return $(window).resize(function(){$.each(l,function(t,e){e.$el.bootstrapTable("resetView")})}),$(document).on("post-header.bs.table",o+" table",function(t){var n=e(t.target);n&&n.$el.closest(o).find(s).on("scroll",a.bind(n))}).on("sort.bs.table",o+" table",function(t,a,o){var s=e(t.target);if(s){var n=s.$s.bsTableControl.state;s.$s.$applyAsync(function(){n.sortName=a,n.sortOrder=o})}}).on("page-change.bs.table",o+" table",function(t,a,o){var s=e(t.target);if(s){var n=s.$s.bsTableControl.state;s.$s.$applyAsync(function(){n.pageNumber=a,n.pageSize=o})}}).on("search.bs.table",o+" table",function(t,a){var o=e(t.target);if(o){var s=o.$s.bsTableControl.state;o.$s.$applyAsync(function(){s.searchText=a})}}).on("focus blur",o+" "+n,function(t){var a=e(t.target);if(a){var o=a.$s.bsTableControl.state;a.$s.$applyAsync(function(){o.searchHasFocus=$(t.target).is(":focus")})}}),{restrict:"EA",scope:{bsTableControl:"="},link:function(t,e){l[t.$id]={$s:t,$el:e},t.instantiated=!1,t.$watch("bsTableControl.options",function(a){a||(a=t.bsTableControl.options={});var s=t.bsTableControl.state||{};t.instantiated&&e.bootstrapTable("destroy"),e.bootstrapTable(angular.extend(angular.copy(a),s)),t.instantiated=!0,"scroll"in s&&e.bootstrapTable("scrollTo",s.scroll),"searchHasFocus"in s&&e.closest(o).find(n).focus()},!0),t.$watch("bsTableControl.state",function(a){a||(a=t.bsTableControl.state={}),e.trigger("directive-updated.bs.table",[a])},!0),t.$on("$destroy",function(){delete l[t.$id]})}}}])}();