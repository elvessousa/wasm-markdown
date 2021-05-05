use wasm_bindgen::prelude::*;
use pulldown_cmark::{Parser, Options, html};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

/* #[wasm_bindgen]
extern {
    fn alert(s: &str);
} */

#[wasm_bindgen]
pub fn render(markdown_input: &str) -> String {
   // alert("Hello, wasm-markdown!");
   let options = Options::empty();
   let parser = Parser::new_ext(markdown_input, options);

   let mut html_output = String::new();
   html::push_html(&mut html_output, parser);

   html_output 
}
