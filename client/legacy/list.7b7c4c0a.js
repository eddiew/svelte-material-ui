import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, G as binding_callbacks, I as bind, M as space, T as text, N as claim_space, g as claim_element, h as children, U as claim_text, j as detach_dev, O as attr_dev, l as add_location, m as insert_dev, J as mount_component, X as set_data_dev, t as transition_in, r as transition_out, K as destroy_component, C as empty, E as group_outros, F as check_outros, a8 as destroy_each, L as add_flush_callback, n as noop } from './index.d5da4a00.js';
import './useActions.0f0a2589.js';
import './style-inject.es.8cab2ed4.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/defineProperty';
import '@babel/runtime/helpers/esm/typeof';
import '@babel/runtime/helpers/esm/toConsumableArray';
import '@babel/runtime/helpers/esm/construct';
import './Div.6b83192d.js';
import './Span.529f06f2.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.826d350b.js';
import { L as List, b as Group, S as Separator, a as Subheader, T as Text, G as Graphic, c as Label, M as Meta, P as PrimaryText, d as SecondaryText } from './index.fbccc86a.js';
import '@babel/runtime/regenerator';
import '@babel/runtime/helpers/esm/asyncToGenerator';
import { I as Item } from './Item.1895db62.js';
import { C as Checkbox } from './index.f2b923ee.js';
import './prefixFilter.1941fe02.js';
import { R as Radio } from './index.f6ebcc53.js';

var file = "src/routes/demo/list.svelte";

function add_css() {
  var style = element("style");
  style.id = 'svelte-pr1nc6-style';
  style.textContent = ".svelte-pr1nc6 .demo-list{max-width:600px;border:1px solid rgba(0,0,0,.1)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zdmVsdGUiLCJzb3VyY2VzIjpbImxpc3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkxpc3RzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkxpc3RzPC9oMj5cblxuICA8ZGl2PlxuICAgIEEgc2ltcGxlIGxpc3Q6XG4gICAgPExpc3QgY2xhc3M9XCJkZW1vLWxpc3RcIj5cbiAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkU2ltcGxlID0gJ0N1dCd9PjxUZXh0PkN1dDwvVGV4dD48L0l0ZW0+XG4gICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZFNpbXBsZSA9ICdDb3B5J30+PFRleHQ+Q29weTwvVGV4dD48L0l0ZW0+XG4gICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZFNpbXBsZSA9ICdQYXN0ZSd9PjxUZXh0PlBhc3RlPC9UZXh0PjwvSXRlbT5cbiAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkU2ltcGxlID0gJ0RlbGV0ZSd9PjxUZXh0PkRlbGV0ZTwvVGV4dD48L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L2Rpdj5cblxuICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xpY2tlZDoge2NsaWNrZWRTaW1wbGV9PC9wcmU+XG5cbiAgPGRpdj5cbiAgICBBIGRlbnNlIGxpc3Qgd2l0aCBncmFwaGljczpcbiAgICA8TGlzdCBjbGFzcz1cImRlbW8tbGlzdFwiIGRlbnNlPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdFZGl0J30+XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5FZGl0PC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdTZW5kJ30+XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zZW5kPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5TZW5kPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdBcmNoaXZlJ30+XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5hcmNoaXZlPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5BcmNoaXZlPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdEZWxldGUnfT5cbiAgICAgICAgPEdyYXBoaWMgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5EZWxldGU8L1RleHQ+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L2Rpdj5cblxuICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xpY2tlZDoge2NsaWNrZWREZW5zZX08L3ByZT5cblxuICA8ZGl2PlxuICAgIEEgbm9uLWludGVyYWN0aXZlIGxpc3Qgd2l0aCBhY3RpdmF0ZWQgaXRlbTpcbiAgICA8TGlzdCBjbGFzcz1cImRlbW8tbGlzdFwiIG5vbkludGVyYWN0aXZlPlxuICAgICAgPEl0ZW0gcmlwcGxlPXtmYWxzZX0+PFRleHQ+VGhpbmcgMTwvVGV4dD48L0l0ZW0+XG4gICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICA8SXRlbSByaXBwbGU9e2ZhbHNlfSBhY3RpdmF0ZWQ+PFRleHQ+VGhpbmcgMjwvVGV4dD48L0l0ZW0+XG4gICAgICA8SXRlbSByaXBwbGU9e2ZhbHNlfT48VGV4dD5UaGluZyAzPC9UZXh0PjwvSXRlbT5cbiAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgIDxJdGVtIHJpcHBsZT17ZmFsc2V9PjxUZXh0PlRoaW5nIDQ8L1RleHQ+PC9JdGVtPlxuICAgIDwvTGlzdD5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBBIHR3by1saW5lIHNpbmdsZSBzZWxlY3Rpb24gbGlzdCB3aXRoIGF2YXRhcnMsIGRpc2FibGVkIGl0ZW0sIGFuZCBtZXRhOlxuICAgIDxMaXN0IGNsYXNzPVwiZGVtby1saXN0XCIgdHdvTGluZSBhdmF0YXJMaXN0IHNpbmdsZVNlbGVjdGlvbiBiaW5kOnNlbGVjdGVkSW5kZXg9e3NlbGVjdGlvbkluZGV4fT5cbiAgICAgIHsjZWFjaCBvcHRpb25zVHdvTGluZSBhcyBpdGVtfVxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gc2VsZWN0aW9uVHdvTGluZSA9IGl0ZW0ubmFtZX0gZGlzYWJsZWQ9e2l0ZW0uZGlzYWJsZWR9IHNlbGVjdGVkPXtzZWxlY3Rpb25Ud29MaW5lID09PSBpdGVtLm5hbWV9PlxuICAgICAgICAgIDxHcmFwaGljIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MHg0MC5wbmc/dGV4dD17aXRlbS5uYW1lLnNwbGl0KCcgJykubWFwKHZhbCA9PiB2YWwuc3Vic3RyaW5nKDAsIDEpKS5qb2luKCcnKX0pO1wiIC8+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8UHJpbWFyeVRleHQ+e2l0ZW0ubmFtZX08L1ByaW1hcnlUZXh0PlxuICAgICAgICAgICAgPFNlY29uZGFyeVRleHQ+e2l0ZW0uZGVzY3JpcHRpb259PC9TZWNvbmRhcnlUZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8TWV0YSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+aW5mbzwvTWV0YT5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgey9lYWNofVxuICAgIDwvTGlzdD5cbiAgPC9kaXY+XG5cbiAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7c2VsZWN0aW9uVHdvTGluZX0sIHZhbHVlIG9mIHNlbGVjdGVkSW5kZXg6IHtzZWxlY3Rpb25JbmRleH08L3ByZT5cblxuICA8ZGl2PlxuICAgIEEgbGlzdCBncm91cDpcbiAgICA8R3JvdXA+XG4gICAgICA8U3ViaGVhZGVyPkFjdG9yczwvU3ViaGVhZGVyPlxuICAgICAgPExpc3QgY2xhc3M9XCJkZW1vLWxpc3RcIj5cbiAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWRHcm91cCA9ICdCcnVjZSBXaWxsaXMnfT5cbiAgICAgICAgICA8VGV4dD5CcnVjZSBXaWxsaXM8L1RleHQ+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWRHcm91cCA9ICdUb20gSGFua3MnfT5cbiAgICAgICAgICA8VGV4dD5Ub20gSGFua3M8L1RleHQ+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWRHcm91cCA9ICdKYWNrIE5pY2hvbHNvbid9PlxuICAgICAgICAgIDxUZXh0PkphY2sgTmljaG9sc29uPC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkR3JvdXAgPSAnTGVvbmFyZG8gRGlDYXByaW8nfT5cbiAgICAgICAgICA8VGV4dD5MZW9uYXJkbyBEaUNhcHJpbzwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZEdyb3VwID0gJ01hdHQgRGFtb24nfT5cbiAgICAgICAgICA8VGV4dD5NYXR0IERhbW9uPC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0xpc3Q+XG4gICAgICA8U3ViaGVhZGVyPkJvb2tzPC9TdWJoZWFkZXI+XG4gICAgICA8TGlzdCBjbGFzcz1cImRlbW8tbGlzdFwiPlxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZEdyb3VwID0gJ1RvIEtpbGwgYSBNb2NraW5nYmlyZCd9PlxuICAgICAgICAgIDxUZXh0PlRvIEtpbGwgYSBNb2NraW5nYmlyZDwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZEdyb3VwID0gJ1RoZSBHcmVhdCBHYXRzYnknfT5cbiAgICAgICAgICA8VGV4dD5UaGUgR3JlYXQgR2F0c2J5PC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkR3JvdXAgPSAnMTk4NCd9PlxuICAgICAgICAgIDxUZXh0PjE5ODQ8L1RleHQ+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWRHcm91cCA9ICdDYXRjaC0yMid9PlxuICAgICAgICAgIDxUZXh0PkNhdGNoLTIyPC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkR3JvdXAgPSAnQWxpY2VcXCdzIEFkdmVudHVyZXMgaW4gV29uZGVybGFuZCd9PlxuICAgICAgICAgIDxUZXh0PkFsaWNlJ3MgQWR2ZW50dXJlcyBpbiBXb25kZXJsYW5kPC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0xpc3Q+XG4gICAgPC9Hcm91cD5cbiAgPC9kaXY+XG5cbiAgPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsaWNrZWQ6IHtjbGlja2VkR3JvdXB9PC9wcmU+XG5cbiAgPGRpdj5cbiAgICBBIHJhZGlvIGxpc3Q6XG4gICAgPExpc3QgY2xhc3M9XCJkZW1vLWxpc3RcIiByYWRpb2xpc3Q+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPEdyYXBoaWM+XG4gICAgICAgICAgPFJhZGlvIGJpbmQ6Z3JvdXA9e3NlbGVjdGVkUmFkaW99IHZhbHVlPVwiQnJ1Y2UgV2lsbGlzXCIgLz5cbiAgICAgICAgPC9HcmFwaGljPlxuICAgICAgICA8TGFiZWw+QnJ1Y2UgV2lsbGlzPC9MYWJlbD5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8R3JhcGhpYz5cbiAgICAgICAgICA8UmFkaW8gYmluZDpncm91cD17c2VsZWN0ZWRSYWRpb30gdmFsdWU9XCJUb20gSGFua3NcIiAvPlxuICAgICAgICA8L0dyYXBoaWM+XG4gICAgICAgIDxMYWJlbD5Ub20gSGFua3M8L0xhYmVsPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxHcmFwaGljPlxuICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3RlZFJhZGlvfSB2YWx1ZT1cIkphY2sgTmljaG9sc29uXCIgLz5cbiAgICAgICAgPC9HcmFwaGljPlxuICAgICAgICA8TGFiZWw+SmFjayBOaWNob2xzb248L0xhYmVsPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxHcmFwaGljPlxuICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3RlZFJhZGlvfSB2YWx1ZT1cIkxlb25hcmRvIERpQ2FwcmlvXCIgLz5cbiAgICAgICAgPC9HcmFwaGljPlxuICAgICAgICA8TGFiZWw+TGVvbmFyZG8gRGlDYXByaW88L0xhYmVsPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxHcmFwaGljPlxuICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3RlZFJhZGlvfSB2YWx1ZT1cIk1hdHQgRGFtb25cIiAvPlxuICAgICAgICA8L0dyYXBoaWM+XG4gICAgICAgIDxMYWJlbD5NYXR0IERhbW9uPC9MYWJlbD5cbiAgICAgIDwvSXRlbT5cbiAgICA8L0xpc3Q+XG4gIDwvZGl2PlxuXG4gIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3NlbGVjdGVkUmFkaW99PC9wcmU+XG5cbiAgPGRpdj5cbiAgICBBIGNoZWNrIGxpc3Qgd2l0aCB0cmFpbGluZyBjaGVja2JveGVzOlxuICAgIDxMaXN0IGNsYXNzPVwiZGVtby1saXN0XCIgY2hlY2tsaXN0PlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxMYWJlbD5CcnVjZSBXaWxsaXM8L0xhYmVsPlxuICAgICAgICA8TWV0YT5cbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpncm91cD17c2VsZWN0ZWRDaGVja2JveH0gdmFsdWU9XCJCcnVjZSBXaWxsaXNcIiAvPlxuICAgICAgICA8L01ldGE+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPExhYmVsPlRvbSBIYW5rczwvTGFiZWw+XG4gICAgICAgIDxNZXRhPlxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmdyb3VwPXtzZWxlY3RlZENoZWNrYm94fSB2YWx1ZT1cIlRvbSBIYW5rc1wiIC8+XG4gICAgICAgIDwvTWV0YT5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8TGFiZWw+SmFjayBOaWNob2xzb248L0xhYmVsPlxuICAgICAgICA8TWV0YT5cbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpncm91cD17c2VsZWN0ZWRDaGVja2JveH0gdmFsdWU9XCJKYWNrIE5pY2hvbHNvblwiIC8+XG4gICAgICAgIDwvTWV0YT5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8TGFiZWw+TGVvbmFyZG8gRGlDYXByaW88L0xhYmVsPlxuICAgICAgICA8TWV0YT5cbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpncm91cD17c2VsZWN0ZWRDaGVja2JveH0gdmFsdWU9XCJMZW9uYXJkbyBEaUNhcHJpb1wiIC8+XG4gICAgICAgIDwvTWV0YT5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8TGFiZWw+TWF0dCBEYW1vbjwvTGFiZWw+XG4gICAgICAgIDxNZXRhPlxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmdyb3VwPXtzZWxlY3RlZENoZWNrYm94fSB2YWx1ZT1cIk1hdHQgRGFtb25cIiAvPlxuICAgICAgICA8L01ldGE+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L2Rpdj5cblxuICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHtzZWxlY3RlZENoZWNrYm94LmpvaW4oJywgJyl9PC9wcmU+XG48L3NlY3Rpb24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBMaXN0LCB7R3JvdXAsIEl0ZW0sIEdyYXBoaWMsIE1ldGEsIExhYmVsLCBTZXBhcmF0b3IsIFN1YmhlYWRlciwgVGV4dCwgUHJpbWFyeVRleHQsIFNlY29uZGFyeVRleHR9IGZyb20gJ0BzbXVpL2xpc3QnO1xuICBpbXBvcnQgUmFkaW8gZnJvbSAnQHNtdWkvcmFkaW8nO1xuICBpbXBvcnQgQ2hlY2tib3ggZnJvbSAnQHNtdWkvY2hlY2tib3gnO1xuXG4gIGxldCBjbGlja2VkU2ltcGxlID0gJ25vdGhpbmcgeWV0JztcbiAgbGV0IGNsaWNrZWREZW5zZSA9ICdub3RoaW5nIHlldCc7XG4gIGxldCBvcHRpb25zVHdvTGluZSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQnJ1Y2UgV2lsbGlzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWN0b3InLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQXVzdGluIFBvd2VycycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpY3Rpb25hbCBDaGFyYWN0ZXInLFxuICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdUaG9tYXMgRWRpc29uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSW52ZW50b3InLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU3RlcGhlbiBIYXdraW5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2NpZW50aXN0JyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH1cbiAgXTtcbiAgbGV0IHNlbGVjdGlvblR3b0xpbmUgPSAnU3RlcGhlbiBIYXdraW5nJztcbiAgLy8gVGhpcyB2YWx1ZSBpcyB1cGRhdGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZCwgYmFzZWQgb24gdGhlXG4gIC8vIHNlbGVjdGVkIEl0ZW0ncyBgc2VsZWN0ZWRgIHByb3AuXG4gIGxldCBzZWxlY3Rpb25JbmRleCA9IG51bGw7XG4gIGxldCBjbGlja2VkR3JvdXAgPSAnbm90aGluZyB5ZXQnO1xuICBsZXQgc2VsZWN0ZWRSYWRpbyA9ICdUb20gSGFua3MnO1xuICBsZXQgc2VsZWN0ZWRDaGVja2JveCA9IFsnVG9tIEhhbmtzJ107XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAqIDpnbG9iYWwoLmRlbW8tbGlzdCkge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG4gIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJPRSxjQUFDLENBQUMsQUFBUSxVQUFVLEFBQUUsQ0FBQyxBQUNyQixTQUFTLENBQUUsS0FBSyxDQUNoQixNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxBQUNsQyxDQUFDIn0= */";
  append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.item = list[i];
  return child_ctx;
} // (11:57) <Text>


function create_default_slot_93(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Cut");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Cut");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_93.name,
    type: "slot",
    source: "(11:57) <Text>",
    ctx: ctx
  });
  return block;
} // (11:6) <Item on:SMUI:action={() => clickedSimple = 'Cut'}>


function create_default_slot_92(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_93]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_92.name,
    type: "slot",
    source: "(11:6) <Item on:SMUI:action={() => clickedSimple = 'Cut'}>",
    ctx: ctx
  });
  return block;
} // (12:58) <Text>


function create_default_slot_91(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Copy");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Copy");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_91.name,
    type: "slot",
    source: "(12:58) <Text>",
    ctx: ctx
  });
  return block;
} // (12:6) <Item on:SMUI:action={() => clickedSimple = 'Copy'}>


function create_default_slot_90(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_91]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_90.name,
    type: "slot",
    source: "(12:6) <Item on:SMUI:action={() => clickedSimple = 'Copy'}>",
    ctx: ctx
  });
  return block;
} // (13:59) <Text>


function create_default_slot_89(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paste");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paste");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_89.name,
    type: "slot",
    source: "(13:59) <Text>",
    ctx: ctx
  });
  return block;
} // (13:6) <Item on:SMUI:action={() => clickedSimple = 'Paste'}>


function create_default_slot_88(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_89]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_88.name,
    type: "slot",
    source: "(13:6) <Item on:SMUI:action={() => clickedSimple = 'Paste'}>",
    ctx: ctx
  });
  return block;
} // (15:60) <Text>


function create_default_slot_87(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_87.name,
    type: "slot",
    source: "(15:60) <Text>",
    ctx: ctx
  });
  return block;
} // (15:6) <Item on:SMUI:action={() => clickedSimple = 'Delete'}>


function create_default_slot_86(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_87]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_86.name,
    type: "slot",
    source: "(15:6) <Item on:SMUI:action={() => clickedSimple = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (10:4) <List class="demo-list">


function create_default_slot_85(ctx) {
  var t0, t1, t2, t3, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_92]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action", ctx.SMUI_action_handler);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_90]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action", ctx.SMUI_action_handler_1);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_88]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action", ctx.SMUI_action_handler_2);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_86]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action", ctx.SMUI_action_handler_3);
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      item2.$$.fragment.c();
      t2 = space();
      separator.$$.fragment.c();
      t3 = space();
      item3.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      separator.$$.fragment.l(nodes);
      t3 = claim_space(nodes);
      item3.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
      var item3_changes = {};
      if (changed.$$scope) item3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(item2, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(separator, detaching);

      if (detaching) {
        detach_dev(t3);
      }

      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_85.name,
    type: "slot",
    source: "(10:4) <List class=\"demo-list\">",
    ctx: ctx
  });
  return block;
} // (25:8) <Graphic class="material-icons">


function create_default_slot_84(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("edit");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "edit");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_84.name,
    type: "slot",
    source: "(25:8) <Graphic class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (26:8) <Text>


function create_default_slot_83(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Edit");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Edit");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_83.name,
    type: "slot",
    source: "(26:8) <Text>",
    ctx: ctx
  });
  return block;
} // (24:6) <Item on:SMUI:action={() => clickedDense = 'Edit'}>


function create_default_slot_82(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_84]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_83]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_82.name,
    type: "slot",
    source: "(24:6) <Item on:SMUI:action={() => clickedDense = 'Edit'}>",
    ctx: ctx
  });
  return block;
} // (29:8) <Graphic class="material-icons">


function create_default_slot_81(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("send");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "send");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_81.name,
    type: "slot",
    source: "(29:8) <Graphic class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (30:8) <Text>


function create_default_slot_80(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Send");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Send");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_80.name,
    type: "slot",
    source: "(30:8) <Text>",
    ctx: ctx
  });
  return block;
} // (28:6) <Item on:SMUI:action={() => clickedDense = 'Send'}>


function create_default_slot_79(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_81]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_80]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_79.name,
    type: "slot",
    source: "(28:6) <Item on:SMUI:action={() => clickedDense = 'Send'}>",
    ctx: ctx
  });
  return block;
} // (33:8) <Graphic class="material-icons">


function create_default_slot_78(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("archive");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "archive");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_78.name,
    type: "slot",
    source: "(33:8) <Graphic class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (34:8) <Text>


function create_default_slot_77(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Archive");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Archive");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_77.name,
    type: "slot",
    source: "(34:8) <Text>",
    ctx: ctx
  });
  return block;
} // (32:6) <Item on:SMUI:action={() => clickedDense = 'Archive'}>


function create_default_slot_76(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_78]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_77]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_76.name,
    type: "slot",
    source: "(32:6) <Item on:SMUI:action={() => clickedDense = 'Archive'}>",
    ctx: ctx
  });
  return block;
} // (38:8) <Graphic class="material-icons">


function create_default_slot_75(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("clear");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "clear");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_75.name,
    type: "slot",
    source: "(38:8) <Graphic class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (39:8) <Text>


function create_default_slot_74(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_74.name,
    type: "slot",
    source: "(39:8) <Text>",
    ctx: ctx
  });
  return block;
} // (37:6) <Item on:SMUI:action={() => clickedDense = 'Delete'}>


function create_default_slot_73(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_75]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_74]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_73.name,
    type: "slot",
    source: "(37:6) <Item on:SMUI:action={() => clickedDense = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (23:4) <List class="demo-list" dense>


function create_default_slot_72(ctx) {
  var t0, t1, t2, t3, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_82]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action", ctx.SMUI_action_handler_4);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_79]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action", ctx.SMUI_action_handler_5);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_76]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action", ctx.SMUI_action_handler_6);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_73]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action", ctx.SMUI_action_handler_7);
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      item2.$$.fragment.c();
      t2 = space();
      separator.$$.fragment.c();
      t3 = space();
      item3.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      separator.$$.fragment.l(nodes);
      t3 = claim_space(nodes);
      item3.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
      var item3_changes = {};
      if (changed.$$scope) item3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(item2, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(separator, detaching);

      if (detaching) {
        detach_dev(t3);
      }

      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_72.name,
    type: "slot",
    source: "(23:4) <List class=\"demo-list\" dense>",
    ctx: ctx
  });
  return block;
} // (49:27) <Text>


function create_default_slot_71(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_71.name,
    type: "slot",
    source: "(49:27) <Text>",
    ctx: ctx
  });
  return block;
} // (49:6) <Item ripple={false}>


function create_default_slot_70(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_71]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_70.name,
    type: "slot",
    source: "(49:6) <Item ripple={false}>",
    ctx: ctx
  });
  return block;
} // (51:37) <Text>


function create_default_slot_69(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_69.name,
    type: "slot",
    source: "(51:37) <Text>",
    ctx: ctx
  });
  return block;
} // (51:6) <Item ripple={false} activated>


function create_default_slot_68(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_69]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_68.name,
    type: "slot",
    source: "(51:6) <Item ripple={false} activated>",
    ctx: ctx
  });
  return block;
} // (52:27) <Text>


function create_default_slot_67(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_67.name,
    type: "slot",
    source: "(52:27) <Text>",
    ctx: ctx
  });
  return block;
} // (52:6) <Item ripple={false}>


function create_default_slot_66(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_67]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_66.name,
    type: "slot",
    source: "(52:6) <Item ripple={false}>",
    ctx: ctx
  });
  return block;
} // (54:27) <Text>


function create_default_slot_65(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 4");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 4");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_65.name,
    type: "slot",
    source: "(54:27) <Text>",
    ctx: ctx
  });
  return block;
} // (54:6) <Item ripple={false}>


function create_default_slot_64(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_65]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_64.name,
    type: "slot",
    source: "(54:6) <Item ripple={false}>",
    ctx: ctx
  });
  return block;
} // (48:4) <List class="demo-list" nonInteractive>


function create_default_slot_63(ctx) {
  var t0, t1, t2, t3, t4, current;
  var item0 = new Item({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_70]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var separator0 = new Separator({
    $$inline: true
  });
  var item1 = new Item({
    props: {
      ripple: false,
      activated: true,
      $$slots: {
        default: [create_default_slot_68]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item2 = new Item({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_66]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var separator1 = new Separator({
    $$inline: true
  });
  var item3 = new Item({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_64]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      separator0.$$.fragment.c();
      t1 = space();
      item1.$$.fragment.c();
      t2 = space();
      item2.$$.fragment.c();
      t3 = space();
      separator1.$$.fragment.c();
      t4 = space();
      item3.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      separator0.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
      t3 = claim_space(nodes);
      separator1.$$.fragment.l(nodes);
      t4 = claim_space(nodes);
      item3.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(separator0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(separator1, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
      var item3_changes = {};
      if (changed.$$scope) item3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(separator0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator1.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(separator0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator1.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(separator0, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(item2, detaching);

      if (detaching) {
        detach_dev(t3);
      }

      destroy_component(separator1, detaching);

      if (detaching) {
        detach_dev(t4);
      }

      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_63.name,
    type: "slot",
    source: "(48:4) <List class=\"demo-list\" nonInteractive>",
    ctx: ctx
  });
  return block;
} // (65:12) <PrimaryText>


function create_default_slot_62(ctx) {
  var t_value = ctx.item.name + "",
      t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_62.name,
    type: "slot",
    source: "(65:12) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (66:12) <SecondaryText>


function create_default_slot_61(ctx) {
  var t_value = ctx.item.description + "",
      t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_61.name,
    type: "slot",
    source: "(66:12) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (64:10) <Text>


function create_default_slot_60(ctx) {
  var t, current;
  var primarytext = new PrimaryText({
    props: {
      $$slots: {
        default: [create_default_slot_62]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var secondarytext = new SecondaryText({
    props: {
      $$slots: {
        default: [create_default_slot_61]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      primarytext.$$.fragment.c();
      t = space();
      secondarytext.$$.fragment.c();
    },
    l: function claim(nodes) {
      primarytext.$$.fragment.l(nodes);
      t = claim_space(nodes);
      secondarytext.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(secondarytext, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var primarytext_changes = {};
      if (changed.$$scope) primarytext_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      primarytext.$set(primarytext_changes);
      var secondarytext_changes = {};
      if (changed.$$scope) secondarytext_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      secondarytext.$set(secondarytext_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(secondarytext, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_60.name,
    type: "slot",
    source: "(64:10) <Text>",
    ctx: ctx
  });
  return block;
} // (68:10) <Meta class="material-icons">


function create_default_slot_59(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("info");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "info");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_59.name,
    type: "slot",
    source: "(68:10) <Meta class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (62:8) <Item on:SMUI:action={() => selectionTwoLine = item.name} disabled={item.disabled} selected={selectionTwoLine === item.name}>


function create_default_slot_58(ctx) {
  var t0, t1, t2, current;
  var graphic = new Graphic({
    props: {
      style: "background-image: url(https://via.placeholder.com/40x40.png?text=" + ctx.item.name.split(' ').map(func).join('') + ");"
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_60]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_59]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t0 = space();
      text_1.$$.fragment.c();
      t1 = space();
      meta.$$.fragment.c();
      t2 = space();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      text_1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      meta.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(text_1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(meta, target, anchor);
      insert_dev(target, t2, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
      var meta_changes = {};
      if (changed.$$scope) meta_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(text_1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(meta, detaching);

      if (detaching) {
        detach_dev(t2);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_58.name,
    type: "slot",
    source: "(62:8) <Item on:SMUI:action={() => selectionTwoLine = item.name} disabled={item.disabled} selected={selectionTwoLine === item.name}>",
    ctx: ctx
  });
  return block;
} // (61:6) {#each optionsTwoLine as item}


function create_each_block(ctx) {
  var current;

  function SMUI_action_handler_8() {
    return ctx.SMUI_action_handler_8(ctx);
  }

  var item = new Item({
    props: {
      disabled: ctx.item.disabled,
      selected: ctx.selectionTwoLine === ctx.item.name,
      $$slots: {
        default: [create_default_slot_58]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item.$on("SMUI:action", SMUI_action_handler_8);
  var block = {
    c: function create() {
      item.$$.fragment.c();
    },
    l: function claim(nodes) {
      item.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(changed, new_ctx) {
      ctx = new_ctx;
      var item_changes = {};
      if (changed.selectionTwoLine) item_changes.selected = ctx.selectionTwoLine === ctx.item.name;
      if (changed.$$scope) item_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(61:6) {#each optionsTwoLine as item}",
    ctx: ctx
  });
  return block;
} // (60:4) <List class="demo-list" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>


function create_default_slot_57(ctx) {
  var each_1_anchor, current;
  var each_value = ctx.optionsTwoLine;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.optionsTwoLine || changed.selectionTwoLine) {
        each_value = ctx.optionsTwoLine;

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(changed, child_ctx);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_57.name,
    type: "slot",
    source: "(60:4) <List class=\"demo-list\" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>",
    ctx: ctx
  });
  return block;
} // (79:6) <Subheader>


function create_default_slot_56(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Actors");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Actors");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_56.name,
    type: "slot",
    source: "(79:6) <Subheader>",
    ctx: ctx
  });
  return block;
} // (82:10) <Text>


function create_default_slot_55(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Bruce Willis");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Bruce Willis");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_55.name,
    type: "slot",
    source: "(82:10) <Text>",
    ctx: ctx
  });
  return block;
} // (81:8) <Item on:SMUI:action={() => clickedGroup = 'Bruce Willis'}>


function create_default_slot_54(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_55]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_54.name,
    type: "slot",
    source: "(81:8) <Item on:SMUI:action={() => clickedGroup = 'Bruce Willis'}>",
    ctx: ctx
  });
  return block;
} // (85:10) <Text>


function create_default_slot_53(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Tom Hanks");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tom Hanks");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_53.name,
    type: "slot",
    source: "(85:10) <Text>",
    ctx: ctx
  });
  return block;
} // (84:8) <Item on:SMUI:action={() => clickedGroup = 'Tom Hanks'}>


function create_default_slot_52(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_53]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_52.name,
    type: "slot",
    source: "(84:8) <Item on:SMUI:action={() => clickedGroup = 'Tom Hanks'}>",
    ctx: ctx
  });
  return block;
} // (88:10) <Text>


function create_default_slot_51(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Jack Nicholson");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Jack Nicholson");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(88:10) <Text>",
    ctx: ctx
  });
  return block;
} // (87:8) <Item on:SMUI:action={() => clickedGroup = 'Jack Nicholson'}>


function create_default_slot_50(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_50.name,
    type: "slot",
    source: "(87:8) <Item on:SMUI:action={() => clickedGroup = 'Jack Nicholson'}>",
    ctx: ctx
  });
  return block;
} // (91:10) <Text>


function create_default_slot_49(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Leonardo DiCaprio");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Leonardo DiCaprio");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_49.name,
    type: "slot",
    source: "(91:10) <Text>",
    ctx: ctx
  });
  return block;
} // (90:8) <Item on:SMUI:action={() => clickedGroup = 'Leonardo DiCaprio'}>


function create_default_slot_48(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_48.name,
    type: "slot",
    source: "(90:8) <Item on:SMUI:action={() => clickedGroup = 'Leonardo DiCaprio'}>",
    ctx: ctx
  });
  return block;
} // (94:10) <Text>


function create_default_slot_47(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Matt Damon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Matt Damon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(94:10) <Text>",
    ctx: ctx
  });
  return block;
} // (93:8) <Item on:SMUI:action={() => clickedGroup = 'Matt Damon'}>


function create_default_slot_46(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_46.name,
    type: "slot",
    source: "(93:8) <Item on:SMUI:action={() => clickedGroup = 'Matt Damon'}>",
    ctx: ctx
  });
  return block;
} // (80:6) <List class="demo-list">


function create_default_slot_45(ctx) {
  var t0, t1, t2, t3, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action", ctx.SMUI_action_handler_9);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_52]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action", ctx.SMUI_action_handler_10);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_50]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action", ctx.SMUI_action_handler_11);
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_48]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action", ctx.SMUI_action_handler_12);
  var item4 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_46]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item4.$on("SMUI:action", ctx.SMUI_action_handler_13);
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      item2.$$.fragment.c();
      t2 = space();
      item3.$$.fragment.c();
      t3 = space();
      item4.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      item3.$$.fragment.l(nodes);
      t3 = claim_space(nodes);
      item4.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
      var item3_changes = {};
      if (changed.$$scope) item3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item3.$set(item3_changes);
      var item4_changes = {};
      if (changed.$$scope) item4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(item2, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(item3, detaching);

      if (detaching) {
        detach_dev(t3);
      }

      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_45.name,
    type: "slot",
    source: "(80:6) <List class=\"demo-list\">",
    ctx: ctx
  });
  return block;
} // (97:6) <Subheader>


function create_default_slot_44(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Books");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Books");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(97:6) <Subheader>",
    ctx: ctx
  });
  return block;
} // (100:10) <Text>


function create_default_slot_43(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("To Kill a Mockingbird");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "To Kill a Mockingbird");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_43.name,
    type: "slot",
    source: "(100:10) <Text>",
    ctx: ctx
  });
  return block;
} // (99:8) <Item on:SMUI:action={() => clickedGroup = 'To Kill a Mockingbird'}>


function create_default_slot_42(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_42.name,
    type: "slot",
    source: "(99:8) <Item on:SMUI:action={() => clickedGroup = 'To Kill a Mockingbird'}>",
    ctx: ctx
  });
  return block;
} // (103:10) <Text>


function create_default_slot_41(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("The Great Gatsby");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "The Great Gatsby");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_41.name,
    type: "slot",
    source: "(103:10) <Text>",
    ctx: ctx
  });
  return block;
} // (102:8) <Item on:SMUI:action={() => clickedGroup = 'The Great Gatsby'}>


function create_default_slot_40(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(102:8) <Item on:SMUI:action={() => clickedGroup = 'The Great Gatsby'}>",
    ctx: ctx
  });
  return block;
} // (106:10) <Text>


function create_default_slot_39(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("1984");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "1984");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_39.name,
    type: "slot",
    source: "(106:10) <Text>",
    ctx: ctx
  });
  return block;
} // (105:8) <Item on:SMUI:action={() => clickedGroup = '1984'}>


function create_default_slot_38(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_38.name,
    type: "slot",
    source: "(105:8) <Item on:SMUI:action={() => clickedGroup = '1984'}>",
    ctx: ctx
  });
  return block;
} // (109:10) <Text>


function create_default_slot_37(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Catch-22");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Catch-22");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(109:10) <Text>",
    ctx: ctx
  });
  return block;
} // (108:8) <Item on:SMUI:action={() => clickedGroup = 'Catch-22'}>


function create_default_slot_36(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(108:8) <Item on:SMUI:action={() => clickedGroup = 'Catch-22'}>",
    ctx: ctx
  });
  return block;
} // (112:10) <Text>


function create_default_slot_35(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Alice's Adventures in Wonderland");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Alice's Adventures in Wonderland");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(112:10) <Text>",
    ctx: ctx
  });
  return block;
} // (111:8) <Item on:SMUI:action={() => clickedGroup = 'Alice\'s Adventures in Wonderland'}>


function create_default_slot_34(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(111:8) <Item on:SMUI:action={() => clickedGroup = 'Alice\\'s Adventures in Wonderland'}>",
    ctx: ctx
  });
  return block;
} // (98:6) <List class="demo-list">


function create_default_slot_33(ctx) {
  var t0, t1, t2, t3, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action", ctx.SMUI_action_handler_14);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action", ctx.SMUI_action_handler_15);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action", ctx.SMUI_action_handler_16);
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_36]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action", ctx.SMUI_action_handler_17);
  var item4 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_34]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item4.$on("SMUI:action", ctx.SMUI_action_handler_18);
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      item2.$$.fragment.c();
      t2 = space();
      item3.$$.fragment.c();
      t3 = space();
      item4.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      item3.$$.fragment.l(nodes);
      t3 = claim_space(nodes);
      item4.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
      var item3_changes = {};
      if (changed.$$scope) item3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item3.$set(item3_changes);
      var item4_changes = {};
      if (changed.$$scope) item4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(item2, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(item3, detaching);

      if (detaching) {
        detach_dev(t3);
      }

      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(98:6) <List class=\"demo-list\">",
    ctx: ctx
  });
  return block;
} // (78:4) <Group>


function create_default_slot_32(ctx) {
  var t0, t1, t2, current;
  var subheader0 = new Subheader({
    props: {
      $$slots: {
        default: [create_default_slot_56]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list0 = new List({
    props: {
      class: "demo-list",
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var subheader1 = new Subheader({
    props: {
      $$slots: {
        default: [create_default_slot_44]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list1 = new List({
    props: {
      class: "demo-list",
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      subheader0.$$.fragment.c();
      t0 = space();
      list0.$$.fragment.c();
      t1 = space();
      subheader1.$$.fragment.c();
      t2 = space();
      list1.$$.fragment.c();
    },
    l: function claim(nodes) {
      subheader0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      list0.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      subheader1.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      list1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(subheader0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(list0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(subheader1, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(list1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var subheader0_changes = {};
      if (changed.$$scope) subheader0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      subheader0.$set(subheader0_changes);
      var list0_changes = {};
      if (changed.$$scope) list0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list0.$set(list0_changes);
      var subheader1_changes = {};
      if (changed.$$scope) subheader1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      subheader1.$set(subheader1_changes);
      var list1_changes = {};
      if (changed.$$scope) list1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list1.$set(list1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(subheader0.$$.fragment, local);
      transition_in(list0.$$.fragment, local);
      transition_in(subheader1.$$.fragment, local);
      transition_in(list1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(subheader0.$$.fragment, local);
      transition_out(list0.$$.fragment, local);
      transition_out(subheader1.$$.fragment, local);
      transition_out(list1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(subheader0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(list0, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(subheader1, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(list1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(78:4) <Group>",
    ctx: ctx
  });
  return block;
} // (124:8) <Graphic>


function create_default_slot_31(ctx) {
  var updating_group, current;

  function radio_group_binding(value) {
    ctx.radio_group_binding.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var radio_props = {
    value: "Bruce Willis"
  };

  if (ctx.selectedRadio !== void 0) {
    radio_props.group = ctx.selectedRadio;
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, 'group', radio_group_binding);
  });
  var block = {
    c: function create() {
      radio.$$.fragment.c();
    },
    l: function claim(nodes) {
      radio.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var radio_changes = {};

      if (!updating_group && changed.selectedRadio) {
        radio_changes.group = ctx.selectedRadio;
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(124:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (127:8) <Label>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Bruce Willis");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Bruce Willis");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_30.name,
    type: "slot",
    source: "(127:8) <Label>",
    ctx: ctx
  });
  return block;
} // (123:6) <Item>


function create_default_slot_29(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_30]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope || changed.selectedRadio) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(123:6) <Item>",
    ctx: ctx
  });
  return block;
} // (130:8) <Graphic>


function create_default_slot_28(ctx) {
  var updating_group, current;

  function radio_group_binding_1(value) {
    ctx.radio_group_binding_1.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var radio_props = {
    value: "Tom Hanks"
  };

  if (ctx.selectedRadio !== void 0) {
    radio_props.group = ctx.selectedRadio;
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, 'group', radio_group_binding_1);
  });
  var block = {
    c: function create() {
      radio.$$.fragment.c();
    },
    l: function claim(nodes) {
      radio.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var radio_changes = {};

      if (!updating_group && changed.selectedRadio) {
        radio_changes.group = ctx.selectedRadio;
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(130:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (133:8) <Label>


function create_default_slot_27(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Tom Hanks");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tom Hanks");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(133:8) <Label>",
    ctx: ctx
  });
  return block;
} // (129:6) <Item>


function create_default_slot_26(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope || changed.selectedRadio) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(129:6) <Item>",
    ctx: ctx
  });
  return block;
} // (136:8) <Graphic>


function create_default_slot_25(ctx) {
  var updating_group, current;

  function radio_group_binding_2(value) {
    ctx.radio_group_binding_2.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var radio_props = {
    value: "Jack Nicholson"
  };

  if (ctx.selectedRadio !== void 0) {
    radio_props.group = ctx.selectedRadio;
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, 'group', radio_group_binding_2);
  });
  var block = {
    c: function create() {
      radio.$$.fragment.c();
    },
    l: function claim(nodes) {
      radio.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var radio_changes = {};

      if (!updating_group && changed.selectedRadio) {
        radio_changes.group = ctx.selectedRadio;
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_25.name,
    type: "slot",
    source: "(136:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (139:8) <Label>


function create_default_slot_24(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Jack Nicholson");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Jack Nicholson");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(139:8) <Label>",
    ctx: ctx
  });
  return block;
} // (135:6) <Item>


function create_default_slot_23(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope || changed.selectedRadio) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(135:6) <Item>",
    ctx: ctx
  });
  return block;
} // (142:8) <Graphic>


function create_default_slot_22(ctx) {
  var updating_group, current;

  function radio_group_binding_3(value) {
    ctx.radio_group_binding_3.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var radio_props = {
    value: "Leonardo DiCaprio"
  };

  if (ctx.selectedRadio !== void 0) {
    radio_props.group = ctx.selectedRadio;
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, 'group', radio_group_binding_3);
  });
  var block = {
    c: function create() {
      radio.$$.fragment.c();
    },
    l: function claim(nodes) {
      radio.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var radio_changes = {};

      if (!updating_group && changed.selectedRadio) {
        radio_changes.group = ctx.selectedRadio;
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(142:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (145:8) <Label>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Leonardo DiCaprio");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Leonardo DiCaprio");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(145:8) <Label>",
    ctx: ctx
  });
  return block;
} // (141:6) <Item>


function create_default_slot_20(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope || changed.selectedRadio) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(141:6) <Item>",
    ctx: ctx
  });
  return block;
} // (148:8) <Graphic>


function create_default_slot_19(ctx) {
  var updating_group, current;

  function radio_group_binding_4(value) {
    ctx.radio_group_binding_4.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var radio_props = {
    value: "Matt Damon"
  };

  if (ctx.selectedRadio !== void 0) {
    radio_props.group = ctx.selectedRadio;
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, 'group', radio_group_binding_4);
  });
  var block = {
    c: function create() {
      radio.$$.fragment.c();
    },
    l: function claim(nodes) {
      radio.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var radio_changes = {};

      if (!updating_group && changed.selectedRadio) {
        radio_changes.group = ctx.selectedRadio;
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(148:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (151:8) <Label>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Matt Damon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Matt Damon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(151:8) <Label>",
    ctx: ctx
  });
  return block;
} // (147:6) <Item>


function create_default_slot_17(ctx) {
  var t, current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      graphic.$$.fragment.c();
      t = space();
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      graphic.$$.fragment.l(nodes);
      t = claim_space(nodes);
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var graphic_changes = {};
      if (changed.$$scope || changed.selectedRadio) graphic_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      graphic.$set(graphic_changes);
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(147:6) <Item>",
    ctx: ctx
  });
  return block;
} // (122:4) <List class="demo-list" radiolist>


function create_default_slot_16(ctx) {
  var t0, t1, t2, t3, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item4 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      item2.$$.fragment.c();
      t2 = space();
      item3.$$.fragment.c();
      t3 = space();
      item4.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      item3.$$.fragment.l(nodes);
      t3 = claim_space(nodes);
      item4.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope || changed.selectedRadio) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope || changed.selectedRadio) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope || changed.selectedRadio) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
      var item3_changes = {};
      if (changed.$$scope || changed.selectedRadio) item3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item3.$set(item3_changes);
      var item4_changes = {};
      if (changed.$$scope || changed.selectedRadio) item4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(item2, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(item3, detaching);

      if (detaching) {
        detach_dev(t3);
      }

      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(122:4) <List class=\"demo-list\" radiolist>",
    ctx: ctx
  });
  return block;
} // (162:8) <Label>


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Bruce Willis");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Bruce Willis");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(162:8) <Label>",
    ctx: ctx
  });
  return block;
} // (163:8) <Meta>


function create_default_slot_14(ctx) {
  var updating_group, current;

  function checkbox_group_binding(value) {
    ctx.checkbox_group_binding.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var checkbox_props = {
    value: "Bruce Willis"
  };

  if (ctx.selectedCheckbox !== void 0) {
    checkbox_props.group = ctx.selectedCheckbox;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'group', checkbox_group_binding);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_group && changed.selectedCheckbox) {
        checkbox_changes.group = ctx.selectedCheckbox;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(163:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (161:6) <Item>


function create_default_slot_13(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
    props: {
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      meta.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      meta.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var meta_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) meta_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(161:6) <Item>",
    ctx: ctx
  });
  return block;
} // (168:8) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Tom Hanks");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tom Hanks");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(168:8) <Label>",
    ctx: ctx
  });
  return block;
} // (169:8) <Meta>


function create_default_slot_11(ctx) {
  var updating_group, current;

  function checkbox_group_binding_1(value) {
    ctx.checkbox_group_binding_1.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var checkbox_props = {
    value: "Tom Hanks"
  };

  if (ctx.selectedCheckbox !== void 0) {
    checkbox_props.group = ctx.selectedCheckbox;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'group', checkbox_group_binding_1);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_group && changed.selectedCheckbox) {
        checkbox_changes.group = ctx.selectedCheckbox;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(169:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (167:6) <Item>


function create_default_slot_10(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
    props: {
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      meta.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      meta.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var meta_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) meta_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(167:6) <Item>",
    ctx: ctx
  });
  return block;
} // (174:8) <Label>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Jack Nicholson");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Jack Nicholson");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(174:8) <Label>",
    ctx: ctx
  });
  return block;
} // (175:8) <Meta>


function create_default_slot_8(ctx) {
  var updating_group, current;

  function checkbox_group_binding_2(value) {
    ctx.checkbox_group_binding_2.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var checkbox_props = {
    value: "Jack Nicholson"
  };

  if (ctx.selectedCheckbox !== void 0) {
    checkbox_props.group = ctx.selectedCheckbox;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'group', checkbox_group_binding_2);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_group && changed.selectedCheckbox) {
        checkbox_changes.group = ctx.selectedCheckbox;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(175:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (173:6) <Item>


function create_default_slot_7(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
    props: {
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      meta.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      meta.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var meta_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) meta_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(173:6) <Item>",
    ctx: ctx
  });
  return block;
} // (180:8) <Label>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Leonardo DiCaprio");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Leonardo DiCaprio");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(180:8) <Label>",
    ctx: ctx
  });
  return block;
} // (181:8) <Meta>


function create_default_slot_5(ctx) {
  var updating_group, current;

  function checkbox_group_binding_3(value) {
    ctx.checkbox_group_binding_3.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var checkbox_props = {
    value: "Leonardo DiCaprio"
  };

  if (ctx.selectedCheckbox !== void 0) {
    checkbox_props.group = ctx.selectedCheckbox;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'group', checkbox_group_binding_3);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_group && changed.selectedCheckbox) {
        checkbox_changes.group = ctx.selectedCheckbox;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(181:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (179:6) <Item>


function create_default_slot_4(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
    props: {
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      meta.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      meta.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var meta_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) meta_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(179:6) <Item>",
    ctx: ctx
  });
  return block;
} // (186:8) <Label>


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Matt Damon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Matt Damon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(186:8) <Label>",
    ctx: ctx
  });
  return block;
} // (187:8) <Meta>


function create_default_slot_2(ctx) {
  var updating_group, current;

  function checkbox_group_binding_4(value) {
    ctx.checkbox_group_binding_4.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var checkbox_props = {
    value: "Matt Damon"
  };

  if (ctx.selectedCheckbox !== void 0) {
    checkbox_props.group = ctx.selectedCheckbox;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'group', checkbox_group_binding_4);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_group && changed.selectedCheckbox) {
        checkbox_changes.group = ctx.selectedCheckbox;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(187:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (185:6) <Item>


function create_default_slot_1(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
    props: {
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      meta.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      meta.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var meta_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) meta_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(185:6) <Item>",
    ctx: ctx
  });
  return block;
} // (160:4) <List class="demo-list" checklist>


function create_default_slot(ctx) {
  var t0, t1, t2, t3, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item4 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      item2.$$.fragment.c();
      t2 = space();
      item3.$$.fragment.c();
      t3 = space();
      item4.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      item3.$$.fragment.l(nodes);
      t3 = claim_space(nodes);
      item4.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
      var item3_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) item3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item3.$set(item3_changes);
      var item4_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) item4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(item2, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(item3, detaching);

      if (detaching) {
        detach_dev(t3);
      }

      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(160:4) <List class=\"demo-list\" checklist>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0,
      section,
      h2,
      t1,
      t2,
      div0,
      t3,
      t4,
      pre0,
      t5,
      t6,
      t7,
      div1,
      t8,
      t9,
      pre1,
      t10,
      t11,
      t12,
      div2,
      t13,
      t14,
      div3,
      t15,
      updating_selectedIndex,
      t16,
      pre2,
      t17,
      t18,
      t19,
      t20,
      t21,
      div4,
      t22,
      t23,
      pre3,
      t24,
      t25,
      t26,
      div5,
      t27,
      t28,
      pre4,
      t29,
      t30,
      t31,
      div6,
      t32,
      t33,
      pre5,
      t34,
      t35_value = ctx.selectedCheckbox.join(', ') + "",
      t35,
      current;
  var list0 = new List({
    props: {
      class: "demo-list",
      $$slots: {
        default: [create_default_slot_85]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list1 = new List({
    props: {
      class: "demo-list",
      dense: true,
      $$slots: {
        default: [create_default_slot_72]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list2 = new List({
    props: {
      class: "demo-list",
      nonInteractive: true,
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function list3_selectedIndex_binding(value) {
    ctx.list3_selectedIndex_binding.call(null, value);
    updating_selectedIndex = true;
    add_flush_callback(function () {
      return updating_selectedIndex = false;
    });
  }

  var list3_props = {
    class: "demo-list",
    twoLine: true,
    avatarList: true,
    singleSelection: true,
    $$slots: {
      default: [create_default_slot_57]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.selectionIndex !== void 0) {
    list3_props.selectedIndex = ctx.selectionIndex;
  }

  var list3 = new List({
    props: list3_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(list3, 'selectedIndex', list3_selectedIndex_binding);
  });
  var group = new Group({
    props: {
      $$slots: {
        default: [create_default_slot_32]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list4 = new List({
    props: {
      class: "demo-list",
      radiolist: true,
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list5 = new List({
    props: {
      class: "demo-list",
      checklist: true,
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Lists");
      t2 = space();
      div0 = element("div");
      t3 = text("A simple list:\n    ");
      list0.$$.fragment.c();
      t4 = space();
      pre0 = element("pre");
      t5 = text("Clicked: ");
      t6 = text(ctx.clickedSimple);
      t7 = space();
      div1 = element("div");
      t8 = text("A dense list with graphics:\n    ");
      list1.$$.fragment.c();
      t9 = space();
      pre1 = element("pre");
      t10 = text("Clicked: ");
      t11 = text(ctx.clickedDense);
      t12 = space();
      div2 = element("div");
      t13 = text("A non-interactive list with activated item:\n    ");
      list2.$$.fragment.c();
      t14 = space();
      div3 = element("div");
      t15 = text("A two-line single selection list with avatars, disabled item, and meta:\n    ");
      list3.$$.fragment.c();
      t16 = space();
      pre2 = element("pre");
      t17 = text("Selected: ");
      t18 = text(ctx.selectionTwoLine);
      t19 = text(", value of selectedIndex: ");
      t20 = text(ctx.selectionIndex);
      t21 = space();
      div4 = element("div");
      t22 = text("A list group:\n    ");
      group.$$.fragment.c();
      t23 = space();
      pre3 = element("pre");
      t24 = text("Clicked: ");
      t25 = text(ctx.clickedGroup);
      t26 = space();
      div5 = element("div");
      t27 = text("A radio list:\n    ");
      list4.$$.fragment.c();
      t28 = space();
      pre4 = element("pre");
      t29 = text("Selected: ");
      t30 = text(ctx.selectedRadio);
      t31 = space();
      div6 = element("div");
      t32 = text("A check list with trailing checkboxes:\n    ");
      list5.$$.fragment.c();
      t33 = space();
      pre5 = element("pre");
      t34 = text("Selected: ");
      t35 = text(t35_value);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      }, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      }, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Lists");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "A simple list:\n    ");
      list0.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre0_nodes = children(pre0);
      t5 = claim_text(pre0_nodes, "Clicked: ");
      t6 = claim_text(pre0_nodes, ctx.clickedSimple);
      pre0_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      t8 = claim_text(div1_nodes, "A dense list with graphics:\n    ");
      list1.$$.fragment.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre1_nodes = children(pre1);
      t10 = claim_text(pre1_nodes, "Clicked: ");
      t11 = claim_text(pre1_nodes, ctx.clickedDense);
      pre1_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      t13 = claim_text(div2_nodes, "A non-interactive list with activated item:\n    ");
      list2.$$.fragment.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      t14 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      t15 = claim_text(div3_nodes, "A two-line single selection list with avatars, disabled item, and meta:\n    ");
      list3.$$.fragment.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre2_nodes = children(pre2);
      t17 = claim_text(pre2_nodes, "Selected: ");
      t18 = claim_text(pre2_nodes, ctx.selectionTwoLine);
      t19 = claim_text(pre2_nodes, ", value of selectedIndex: ");
      t20 = claim_text(pre2_nodes, ctx.selectionIndex);
      pre2_nodes.forEach(detach_dev);
      t21 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div4_nodes = children(div4);
      t22 = claim_text(div4_nodes, "A list group:\n    ");
      group.$$.fragment.l(div4_nodes);
      div4_nodes.forEach(detach_dev);
      t23 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre3_nodes = children(pre3);
      t24 = claim_text(pre3_nodes, "Clicked: ");
      t25 = claim_text(pre3_nodes, ctx.clickedGroup);
      pre3_nodes.forEach(detach_dev);
      t26 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div5_nodes = children(div5);
      t27 = claim_text(div5_nodes, "A radio list:\n    ");
      list4.$$.fragment.l(div5_nodes);
      div5_nodes.forEach(detach_dev);
      t28 = claim_space(section_nodes);
      pre4 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre4_nodes = children(pre4);
      t29 = claim_text(pre4_nodes, "Selected: ");
      t30 = claim_text(pre4_nodes, ctx.selectedRadio);
      pre4_nodes.forEach(detach_dev);
      t31 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div6_nodes = children(div6);
      t32 = claim_text(div6_nodes, "A check list with trailing checkboxes:\n    ");
      list5.$$.fragment.l(div6_nodes);
      div6_nodes.forEach(detach_dev);
      t33 = claim_space(section_nodes);
      pre5 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre5_nodes = children(pre5);
      t34 = claim_text(pre5_nodes, "Selected: ");
      t35 = claim_text(pre5_nodes, t35_value);
      pre5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Lists - SMUI";
      attr_dev(h2, "class", "svelte-pr1nc6");
      add_location(h2, file, 5, 2, 72);
      attr_dev(div0, "class", "svelte-pr1nc6");
      add_location(div0, file, 7, 2, 90);
      attr_dev(pre0, "class", "status svelte-pr1nc6");
      add_location(pre0, file, 18, 2, 524);
      attr_dev(div1, "class", "svelte-pr1nc6");
      add_location(div1, file, 20, 2, 578);
      attr_dev(pre1, "class", "status svelte-pr1nc6");
      add_location(pre1, file, 43, 2, 1321);
      attr_dev(div2, "class", "svelte-pr1nc6");
      add_location(div2, file, 45, 2, 1374);
      attr_dev(div3, "class", "svelte-pr1nc6");
      add_location(div3, file, 57, 2, 1766);
      attr_dev(pre2, "class", "status svelte-pr1nc6");
      add_location(pre2, file, 73, 2, 2533);
      attr_dev(div4, "class", "svelte-pr1nc6");
      add_location(div4, file, 75, 2, 2633);
      attr_dev(pre3, "class", "status svelte-pr1nc6");
      add_location(pre3, file, 117, 2, 4102);
      attr_dev(div5, "class", "svelte-pr1nc6");
      add_location(div5, file, 119, 2, 4155);
      attr_dev(pre4, "class", "status svelte-pr1nc6");
      add_location(pre4, file, 155, 2, 5086);
      attr_dev(div6, "class", "svelte-pr1nc6");
      add_location(div6, file, 157, 2, 5141);
      attr_dev(pre5, "class", "status svelte-pr1nc6");
      add_location(pre5, file, 193, 2, 6097);
      attr_dev(section, "class", "svelte-pr1nc6");
      add_location(section, file, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      append_dev(div0, t3);
      mount_component(list0, div0, null);
      append_dev(section, t4);
      append_dev(section, pre0);
      append_dev(pre0, t5);
      append_dev(pre0, t6);
      append_dev(section, t7);
      append_dev(section, div1);
      append_dev(div1, t8);
      mount_component(list1, div1, null);
      append_dev(section, t9);
      append_dev(section, pre1);
      append_dev(pre1, t10);
      append_dev(pre1, t11);
      append_dev(section, t12);
      append_dev(section, div2);
      append_dev(div2, t13);
      mount_component(list2, div2, null);
      append_dev(section, t14);
      append_dev(section, div3);
      append_dev(div3, t15);
      mount_component(list3, div3, null);
      append_dev(section, t16);
      append_dev(section, pre2);
      append_dev(pre2, t17);
      append_dev(pre2, t18);
      append_dev(pre2, t19);
      append_dev(pre2, t20);
      append_dev(section, t21);
      append_dev(section, div4);
      append_dev(div4, t22);
      mount_component(group, div4, null);
      append_dev(section, t23);
      append_dev(section, pre3);
      append_dev(pre3, t24);
      append_dev(pre3, t25);
      append_dev(section, t26);
      append_dev(section, div5);
      append_dev(div5, t27);
      mount_component(list4, div5, null);
      append_dev(section, t28);
      append_dev(section, pre4);
      append_dev(pre4, t29);
      append_dev(pre4, t30);
      append_dev(section, t31);
      append_dev(section, div6);
      append_dev(div6, t32);
      mount_component(list5, div6, null);
      append_dev(section, t33);
      append_dev(section, pre5);
      append_dev(pre5, t34);
      append_dev(pre5, t35);
      current = true;
    },
    p: function update(changed, ctx) {
      var list0_changes = {};
      if (changed.$$scope) list0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list0.$set(list0_changes);

      if (!current || changed.clickedSimple) {
        set_data_dev(t6, ctx.clickedSimple);
      }

      var list1_changes = {};
      if (changed.$$scope) list1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list1.$set(list1_changes);

      if (!current || changed.clickedDense) {
        set_data_dev(t11, ctx.clickedDense);
      }

      var list2_changes = {};
      if (changed.$$scope) list2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list2.$set(list2_changes);
      var list3_changes = {};
      if (changed.$$scope || changed.selectionTwoLine) list3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_selectedIndex && changed.selectionIndex) {
        list3_changes.selectedIndex = ctx.selectionIndex;
      }

      list3.$set(list3_changes);

      if (!current || changed.selectionTwoLine) {
        set_data_dev(t18, ctx.selectionTwoLine);
      }

      if (!current || changed.selectionIndex) {
        set_data_dev(t20, ctx.selectionIndex);
      }

      var group_changes = {};
      if (changed.$$scope) group_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group.$set(group_changes);

      if (!current || changed.clickedGroup) {
        set_data_dev(t25, ctx.clickedGroup);
      }

      var list4_changes = {};
      if (changed.$$scope || changed.selectedRadio) list4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list4.$set(list4_changes);

      if (!current || changed.selectedRadio) {
        set_data_dev(t30, ctx.selectedRadio);
      }

      var list5_changes = {};
      if (changed.$$scope || changed.selectedCheckbox) list5_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list5.$set(list5_changes);

      if ((!current || changed.selectedCheckbox) && t35_value !== (t35_value = ctx.selectedCheckbox.join(', ') + "")) {
        set_data_dev(t35, t35_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list0.$$.fragment, local);
      transition_in(list1.$$.fragment, local);
      transition_in(list2.$$.fragment, local);
      transition_in(list3.$$.fragment, local);
      transition_in(group.$$.fragment, local);
      transition_in(list4.$$.fragment, local);
      transition_in(list5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list0.$$.fragment, local);
      transition_out(list1.$$.fragment, local);
      transition_out(list2.$$.fragment, local);
      transition_out(list3.$$.fragment, local);
      transition_out(group.$$.fragment, local);
      transition_out(list4.$$.fragment, local);
      transition_out(list5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(list0);
      destroy_component(list1);
      destroy_component(list2);
      destroy_component(list3);
      destroy_component(group);
      destroy_component(list4);
      destroy_component(list5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var func = function func(val) {
  return val.substring(0, 1);
};

function instance($$self, $$props, $$invalidate) {
  var clickedSimple = 'nothing yet';
  var clickedDense = 'nothing yet';
  var optionsTwoLine = [{
    name: 'Bruce Willis',
    description: 'Actor',
    disabled: false
  }, {
    name: 'Austin Powers',
    description: 'Fictional Character',
    disabled: true
  }, {
    name: 'Thomas Edison',
    description: 'Inventor',
    disabled: false
  }, {
    name: 'Stephen Hawking',
    description: 'Scientist',
    disabled: false
  }];
  var selectionTwoLine = 'Stephen Hawking'; // This value is updated when the component is initialized, based on the
  // selected Item's `selected` prop.

  var selectionIndex = null;
  var clickedGroup = 'nothing yet';
  var selectedRadio = 'Tom Hanks';
  var selectedCheckbox = ['Tom Hanks'];

  var SMUI_action_handler = function SMUI_action_handler() {
    return $$invalidate('clickedSimple', clickedSimple = 'Cut');
  };

  var SMUI_action_handler_1 = function SMUI_action_handler_1() {
    return $$invalidate('clickedSimple', clickedSimple = 'Copy');
  };

  var SMUI_action_handler_2 = function SMUI_action_handler_2() {
    return $$invalidate('clickedSimple', clickedSimple = 'Paste');
  };

  var SMUI_action_handler_3 = function SMUI_action_handler_3() {
    return $$invalidate('clickedSimple', clickedSimple = 'Delete');
  };

  var SMUI_action_handler_4 = function SMUI_action_handler_4() {
    return $$invalidate('clickedDense', clickedDense = 'Edit');
  };

  var SMUI_action_handler_5 = function SMUI_action_handler_5() {
    return $$invalidate('clickedDense', clickedDense = 'Send');
  };

  var SMUI_action_handler_6 = function SMUI_action_handler_6() {
    return $$invalidate('clickedDense', clickedDense = 'Archive');
  };

  var SMUI_action_handler_7 = function SMUI_action_handler_7() {
    return $$invalidate('clickedDense', clickedDense = 'Delete');
  };

  var SMUI_action_handler_8 = function SMUI_action_handler_8(_ref) {
    var item = _ref.item;
    return $$invalidate('selectionTwoLine', selectionTwoLine = item.name);
  };

  function list3_selectedIndex_binding(value) {
    selectionIndex = value;
    $$invalidate('selectionIndex', selectionIndex);
  }

  var SMUI_action_handler_9 = function SMUI_action_handler_9() {
    return $$invalidate('clickedGroup', clickedGroup = 'Bruce Willis');
  };

  var SMUI_action_handler_10 = function SMUI_action_handler_10() {
    return $$invalidate('clickedGroup', clickedGroup = 'Tom Hanks');
  };

  var SMUI_action_handler_11 = function SMUI_action_handler_11() {
    return $$invalidate('clickedGroup', clickedGroup = 'Jack Nicholson');
  };

  var SMUI_action_handler_12 = function SMUI_action_handler_12() {
    return $$invalidate('clickedGroup', clickedGroup = 'Leonardo DiCaprio');
  };

  var SMUI_action_handler_13 = function SMUI_action_handler_13() {
    return $$invalidate('clickedGroup', clickedGroup = 'Matt Damon');
  };

  var SMUI_action_handler_14 = function SMUI_action_handler_14() {
    return $$invalidate('clickedGroup', clickedGroup = 'To Kill a Mockingbird');
  };

  var SMUI_action_handler_15 = function SMUI_action_handler_15() {
    return $$invalidate('clickedGroup', clickedGroup = 'The Great Gatsby');
  };

  var SMUI_action_handler_16 = function SMUI_action_handler_16() {
    return $$invalidate('clickedGroup', clickedGroup = '1984');
  };

  var SMUI_action_handler_17 = function SMUI_action_handler_17() {
    return $$invalidate('clickedGroup', clickedGroup = 'Catch-22');
  };

  var SMUI_action_handler_18 = function SMUI_action_handler_18() {
    return $$invalidate('clickedGroup', clickedGroup = 'Alice\'s Adventures in Wonderland');
  };

  function radio_group_binding(value) {
    selectedRadio = value;
    $$invalidate('selectedRadio', selectedRadio);
  }

  function radio_group_binding_1(value) {
    selectedRadio = value;
    $$invalidate('selectedRadio', selectedRadio);
  }

  function radio_group_binding_2(value) {
    selectedRadio = value;
    $$invalidate('selectedRadio', selectedRadio);
  }

  function radio_group_binding_3(value) {
    selectedRadio = value;
    $$invalidate('selectedRadio', selectedRadio);
  }

  function radio_group_binding_4(value) {
    selectedRadio = value;
    $$invalidate('selectedRadio', selectedRadio);
  }

  function checkbox_group_binding(value) {
    selectedCheckbox = value;
    $$invalidate('selectedCheckbox', selectedCheckbox);
  }

  function checkbox_group_binding_1(value) {
    selectedCheckbox = value;
    $$invalidate('selectedCheckbox', selectedCheckbox);
  }

  function checkbox_group_binding_2(value) {
    selectedCheckbox = value;
    $$invalidate('selectedCheckbox', selectedCheckbox);
  }

  function checkbox_group_binding_3(value) {
    selectedCheckbox = value;
    $$invalidate('selectedCheckbox', selectedCheckbox);
  }

  function checkbox_group_binding_4(value) {
    selectedCheckbox = value;
    $$invalidate('selectedCheckbox', selectedCheckbox);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('clickedSimple' in $$props) $$invalidate('clickedSimple', clickedSimple = $$props.clickedSimple);
    if ('clickedDense' in $$props) $$invalidate('clickedDense', clickedDense = $$props.clickedDense);
    if ('optionsTwoLine' in $$props) $$invalidate('optionsTwoLine', optionsTwoLine = $$props.optionsTwoLine);
    if ('selectionTwoLine' in $$props) $$invalidate('selectionTwoLine', selectionTwoLine = $$props.selectionTwoLine);
    if ('selectionIndex' in $$props) $$invalidate('selectionIndex', selectionIndex = $$props.selectionIndex);
    if ('clickedGroup' in $$props) $$invalidate('clickedGroup', clickedGroup = $$props.clickedGroup);
    if ('selectedRadio' in $$props) $$invalidate('selectedRadio', selectedRadio = $$props.selectedRadio);
    if ('selectedCheckbox' in $$props) $$invalidate('selectedCheckbox', selectedCheckbox = $$props.selectedCheckbox);
  };

  return {
    clickedSimple: clickedSimple,
    clickedDense: clickedDense,
    optionsTwoLine: optionsTwoLine,
    selectionTwoLine: selectionTwoLine,
    selectionIndex: selectionIndex,
    clickedGroup: clickedGroup,
    selectedRadio: selectedRadio,
    selectedCheckbox: selectedCheckbox,
    SMUI_action_handler: SMUI_action_handler,
    SMUI_action_handler_1: SMUI_action_handler_1,
    SMUI_action_handler_2: SMUI_action_handler_2,
    SMUI_action_handler_3: SMUI_action_handler_3,
    SMUI_action_handler_4: SMUI_action_handler_4,
    SMUI_action_handler_5: SMUI_action_handler_5,
    SMUI_action_handler_6: SMUI_action_handler_6,
    SMUI_action_handler_7: SMUI_action_handler_7,
    SMUI_action_handler_8: SMUI_action_handler_8,
    list3_selectedIndex_binding: list3_selectedIndex_binding,
    SMUI_action_handler_9: SMUI_action_handler_9,
    SMUI_action_handler_10: SMUI_action_handler_10,
    SMUI_action_handler_11: SMUI_action_handler_11,
    SMUI_action_handler_12: SMUI_action_handler_12,
    SMUI_action_handler_13: SMUI_action_handler_13,
    SMUI_action_handler_14: SMUI_action_handler_14,
    SMUI_action_handler_15: SMUI_action_handler_15,
    SMUI_action_handler_16: SMUI_action_handler_16,
    SMUI_action_handler_17: SMUI_action_handler_17,
    SMUI_action_handler_18: SMUI_action_handler_18,
    radio_group_binding: radio_group_binding,
    radio_group_binding_1: radio_group_binding_1,
    radio_group_binding_2: radio_group_binding_2,
    radio_group_binding_3: radio_group_binding_3,
    radio_group_binding_4: radio_group_binding_4,
    checkbox_group_binding: checkbox_group_binding,
    checkbox_group_binding_1: checkbox_group_binding_1,
    checkbox_group_binding_2: checkbox_group_binding_2,
    checkbox_group_binding_3: checkbox_group_binding_3,
    checkbox_group_binding_4: checkbox_group_binding_4
  };
}

var List_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(List_1, _SvelteComponentDev);

  function List_1(options) {
    var _this;

    _classCallCheck(this, List_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List_1).call(this, options));
    if (!document.getElementById("svelte-pr1nc6-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "List_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return List_1;
}(SvelteComponentDev);

export default List_1;
