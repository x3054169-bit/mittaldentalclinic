export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  metaDescription: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Importance of Regular Teeth Cleaning',
    category: 'Oral Hygiene',
    date: 'Mar 15, 2026',
    image: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'blog-teeth-cleaning.html',
    metaDescription: 'Regular teeth cleaning helps prevent cavities, gum disease, and bad breath. Learn why professional dental cleaning is essential.',
    content: `
### Introduction

Maintaining oral hygiene is not just about brushing daily. Even with proper brushing and flossing, plaque and tartar can build up over time. Regular professional teeth cleaning plays a key role in keeping your teeth and gums healthy.

### Why Teeth Cleaning is Important

Plaque is a sticky layer of bacteria that forms on teeth. If not removed, it hardens into tartar, which cannot be cleaned at home. This can lead to:

- Cavities
- Gum disease
- Bad breath

Professional cleaning removes this buildup and prevents long-term damage.

### Benefits of Regular Cleaning

- Keeps teeth and gums healthy
- Prevents gum infections
- Removes stains and improves appearance
- Helps detect dental problems early

### How Often Should You Get Cleaning?

Most dentists recommend cleaning every 6 months. However, some patients may need more frequent visits depending on their oral condition.

### Conclusion

Regular dental cleaning is a simple but essential step in maintaining long-term oral health. It prevents major dental issues and keeps your smile fresh and clean.
    `
  },
  {
    id: '2',
    title: 'Root Canal Treatment: Myths vs Reality',
    category: 'Treatments',
    date: 'Mar 10, 2026',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'blog-root-canal.html',
    metaDescription: 'Is root canal painful? Learn the truth behind common myths and understand how root canal treatment saves your natural teeth.',
    content: `
### Introduction

Root canal treatment is one of the most misunderstood dental procedures. Many people avoid it due to fear and misinformation.

### Common Myths

**Myth 1: Root canal is very painful**
Reality: Modern techniques and anesthesia make the procedure almost painless.

**Myth 2: Tooth extraction is better**
Reality: Saving your natural tooth is always the best option when possible.

**Myth 3: It takes many visits**
Reality: Most root canal treatments are completed in 1–2 visits.

### What is Root Canal Treatment?

It is a procedure used to remove infected pulp from inside the tooth. The tooth is then cleaned, disinfected, and sealed.

### Benefits

- Saves natural tooth
- Relieves pain
- Prevents infection spread
- Restores normal function

### Conclusion

Root canal treatment is safe, effective, and much less painful than people think. Early treatment can save your tooth and prevent complications.
    `
  },
  {
    id: '3',
    title: 'A Guide to Modern Braces and Aligners',
    category: 'Orthodontics',
    date: 'Mar 05, 2026',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'blog-braces-aligners.html',
    metaDescription: 'Explore different types of braces and aligners. Learn how modern orthodontic treatments help straighten teeth effectively.',
    content: `
### Introduction

Straight teeth are not just about appearance—they are important for proper oral function and hygiene. Modern dentistry offers multiple options to correct alignment issues.

### Types of Braces

**Metal Braces**
- Traditional and most effective
- Suitable for complex cases

**Ceramic Braces**
- Less visible than metal
- Blend with natural teeth

**Clear Aligners**
- Removable and nearly invisible
- Comfortable and convenient

### Who Needs Braces?

- Crooked or crowded teeth
- Gaps between teeth
- Bite problems (overbite, underbite)

### Benefits of Orthodontic Treatment

- Improved appearance
- Better oral hygiene
- Proper chewing and speech
- Long-term dental health

### Conclusion

With modern options like aligners and ceramic braces, orthodontic treatment is more comfortable and discreet than ever. Consulting a dentist helps choose the right solution.
    `
  }
];
