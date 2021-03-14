# TODO
- Recreate sub-pages
- Review accessibility
  - tab navigation
  - social links do not have discernable name  

- style 404 page

# Before Go Live
- remove pathprefix when publishing to root
- adjust robots.txt
- GA tracking code
- SEO scan comparison
- Rich results https://search.google.com/test/rich-results

# Issues
- FOUC, font mostly, I suspect: https://www.gatsbyjs.com/plugins/gatsby-plugin-material-ui/

# Post Go Live
- regression testing:
 - e2e
 - SEO / lighthouse baseline?
 - google web developer, checks ok? sitemap.xml etc.
 - set reminder: remove redirect pages from /static after 6 months.

 # Tech Debt
 - warn [gatsby-transformer-sharp] The "fixed" and "fluid" resolvers are now deprecated. Switch
to "gatsby-plugin-image" for better performance and a simpler API. See
https://gatsby.dev/migrate-images to learn how.
   - Also, see: https://github.com/timhagn/gatsby-background-image/issues/147
- Material UI issues with Gatsby v3 (material UI)
   - https://github.com/hupe1980/gatsby-plugin-material-ui/issues/65
# General Notes
- Funnel: Home Page > Services > Contact
- SEO tips: https://www.gatsbyjs.com/docs/tutorial/part-eight/
- Maintain SEO: https://moz.com/blog/how-to-avoid-an-seo-disaster-when-changing-your-website
- showcase, any ideas? https://www.gatsbyjs.com/showcase/?
- Footer https://material-ui.com/getting-started/templates/sticky-footer/
- Hero ideas: https://www.optimizely.com/uk/optimization-glossary/hero-image/