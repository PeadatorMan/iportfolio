{/* <img src={imageUrl} alt={item.title} loading="lazy" className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${filter === 'VDO' ? 'h-auto rounded' : 'h-64'}`} /> */ }
{/* <div className={`absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center ${filter === 'VDO' ? 'rounded' : ''}`}>
            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
            <p className="uppercase text-sm mb-4">{item.category}</p>
            <div className="flex gap-3 justify-center text-center flex-wrap">
              {item.links && item.links.map((link: any, i: number) => {
                const isVdo = item.category === 'VDO';
                return (
                  <a
                    key={i}
                    href={isVdo ? "#" : link.url}
                    target={isVdo ? "_self" : "_blank"}
                    rel={isVdo ? "" : "noopener noreferrer"}
                    onClick={(e) => {
                      if (isVdo) {
                        e.preventDefault();
                        onPlay(link.url);
                      }
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-xs font-medium backdrop-blur-sm"
                    title={link.label}
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div> */}