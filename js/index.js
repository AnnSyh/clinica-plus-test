(function ()
{
	'use strict';

	// ---------- ДАННЫЕ ----------
	const menuData = [
		{
			title: 'Услуги',
			link: '#',
			active: 'active',
			class:'text-dot'

		},
		{
			title: 'О клинике',
			link: '#',
			children: [
				{
					title: 'Медикаментозные капельницы (препараты)',
					link: '#',
					children: [
						{ title: 'Инфузионная терапия', link: '#' },
						{ title: 'Капельница на дому', link: '#' },
						{ title: 'Капельница для печени', link: '#' },
						{ title: 'Капельницы для сосудов', link: '#' }
					]
				},
				{ title: 'Капельницы красоты', link: '#' },
				{ title: 'Комплексные инфузионные программы', link: '#' },
				{ title: 'Диагностика и анализы', link: '#' },
				{ title: 'Другие услуги', link: '#' }
			]

		},
		{ title: 'Цены', link: '#' },
		{ title: 'Врачи', link: '#' },
		{ title: 'Контакты', link: '#' },
		{ title: 'Статьи', link: '#' }
	];

	const contactsData = {
		address: 'Санкт-Петербург, ул. Авиаконструкторов 45к1',
		support: '+7 (800) 889-99-99',
		workTime: 'Круглосуточно',
		email: 'info@kapelnica-med.ru'
	};

	const socialData = [
		{
			name: 'Instagram',
			svg: `<svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.34362 14.8696C1.28121 13.4893 0.75 12.7992 0.75 10.75C0.75 8.70078 1.28121 8.01066 2.34362 6.63041C4.46496 3.87445 8.02264 0.75 13.25 0.75C18.4774 0.75 22.035 3.87445 24.1564 6.63041C25.2188 8.01066 25.75 8.70078 25.75 10.75C25.75 12.7992 25.2188 13.4893 24.1564 14.8696C22.035 17.6256 18.4774 20.75 13.25 20.75C8.02264 20.75 4.46496 17.6256 2.34362 14.8696Z" stroke="#007844" stroke-width="1.5"/>
              <path d="M17 10.75C17 12.8211 15.3211 14.5 13.25 14.5C11.1789 14.5 9.5 12.8211 9.5 10.75C9.5 8.67893 11.1789 7 13.25 7C15.3211 7 17 8.67893 17 10.75Z" stroke="#007844" stroke-width="1.5"/>
            </svg>`
		},
		{
			name: 'Поиск',
			svg: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.85714" cy="7.85714" r="6.85714" stroke="#007844" stroke-width="2"/>
              <path d="M13.5715 13.5714L17.0001 17" stroke="#007844" stroke-width="2" stroke-linecap="round"/>
            </svg>`
		},
		{
			name: 'Twitter',
			svg: `<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2004 14.2545C4.54716 14.2545 0.181886 8.90374 0 0H3.8336C3.95953 6.53512 6.78576 9.30327 9.02436 9.87402V0H12.6341V5.63618C14.8447 5.39361 17.1673 2.82523 17.9508 0H21.5605C21.2653 1.46524 20.6767 2.85259 19.8317 4.07527C18.9867 5.29796 17.9034 6.32966 16.6496 7.10587C18.0492 7.81511 19.2854 8.81898 20.2766 10.0512C21.2678 11.2835 21.9915 12.7161 22.4 14.2545H18.4265C18.0598 12.9183 17.3146 11.7221 16.2842 10.816C15.2538 9.9098 13.984 9.33395 12.6341 9.16058V14.2545H12.2004Z" fill="#007844"/>
            </svg>`
		},
		{
			name: 'Telegram',
			svg: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6 0.621243L16.4997 16.8068C16.4997 16.8068 16.0659 17.929 14.8742 17.3908L7.72093 11.7111L7.68776 11.6943C8.65401 10.7959 16.1467 3.81959 16.4742 3.50337C16.9811 3.01362 16.6664 2.72206 16.0778 3.09201L5.01016 10.3704L0.740301 8.88268C0.740301 8.88268 0.0683497 8.63517 0.0037063 8.09697C-0.0617876 7.5579 0.762415 7.26634 0.762415 7.26634L18.1693 0.194914C18.1693 0.194914 19.6 -0.45603 19.6 0.621243Z" fill="#007844"/>
            </svg>`
		},
		{
			name: 'VK',
			svg: `<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2376 13.7928C13.7624 13.2681 13.8373 12.5185 13.3876 11.7689C13.0128 11.1692 12.3381 10.8694 11.5885 11.0193C11.2887 11.0942 10.9888 11.2442 10.689 11.469C8.36518 13.0432 5.21682 12.9683 2.89303 11.3941C2.7431 11.3191 2.59318 11.2442 2.44325 11.1692C1.61868 10.7944 0.794122 10.9443 0.344356 11.6939C-0.180371 12.4435 -0.105419 13.2681 0.56923 13.9428C0.719152 14.0927 0.869074 14.1676 0.944035 14.3176L1.019 14.3925C2.06845 15.2171 3.34279 15.7418 4.99194 15.9667L4.01744 16.9412C3.19287 17.7658 2.29334 18.6653 1.46877 19.4899C1.24389 19.7148 0.944035 20.0896 0.944035 20.6143C0.944035 21.2889 1.31885 21.9636 1.9935 22.2634C2.21838 22.4133 2.44326 22.4133 2.66814 22.4133C3.04295 22.4133 3.49271 22.2634 3.79256 21.8886C4.91697 20.7642 5.81651 19.8647 6.71604 18.9651C6.791 18.8902 6.791 18.8902 6.791 18.8902C6.791 18.8902 6.86596 18.8902 6.86596 18.9651C7.46565 19.6398 8.1403 20.2395 8.73999 20.9141C9.03983 21.214 9.33967 21.5138 9.63952 21.8137C10.0143 22.1885 10.3142 22.3384 10.7639 22.3384C11.4386 22.4134 12.1882 21.9636 12.488 21.2889C12.7879 20.6892 12.638 19.9396 12.1132 19.4899C11.3636 18.7403 10.614 17.9157 9.78944 17.1661L8.5151 15.8917C9.18975 15.8168 9.93936 15.6669 10.614 15.367C11.7384 14.9922 12.563 14.4675 13.2376 13.7928Z" fill="#007844"/>
              <path d="M6.79099 11.6939C10.0143 11.6939 12.638 9.14524 12.638 5.92191C12.638 4.34773 12.0383 2.84852 10.9138 1.72411C9.78943 0.59969 8.36518 0 6.86596 0C3.64264 0 1.09396 2.62363 1.019 5.77199C1.019 7.34618 1.61869 8.77043 2.7431 9.89485C3.79256 11.0942 5.21681 11.6939 6.79099 11.6939ZM5.14185 4.19782C5.59162 3.74805 6.19131 3.52316 6.79099 3.52316C8.14029 3.52316 9.11479 4.57262 9.11479 5.84696C9.11479 7.19626 8.06533 8.17074 6.79099 8.17074C5.4417 8.17074 4.46721 7.1213 4.46721 5.84696C4.46721 5.24727 4.69209 4.64759 5.14185 4.19782Z" fill="#007844"/>
            </svg>`
		}
	];

	// ---------- ФУНКЦИИ ГЕНЕРАЦИИ ----------

	// Десктопный пункт меню
	function createDesktopMenuItem(item)
	{
		const hasChildren = item.children && item.children.length;
		const link = document.createElement('a');
		link.className = item.active
		link.href = item.link || '#';
		link.textContent = item.title;
		if (hasChildren)
		{
			const wrapper = document.createElement('span');
			wrapper.className = 'has-children';
			const sub = document.createElement('div');
			sub.classList.add('submenu');
			item.children.forEach(child =>
			{
				sub.appendChild(createDesktopMenuItem(child));
			});
			wrapper.appendChild(link);
			wrapper.appendChild(sub);
			return wrapper;
		}
		return link;
	}

	// Мобильный пункт меню
	function createMobileMenuItem(item, level = 0)
	{
		const hasChildren = item.children && item.children.length;
		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.flexDirection = 'column';

		const linkRow = document.createElement('div');
		linkRow.style.display = 'flex';
		linkRow.style.justifyContent = 'space-between';
		linkRow.style.alignItems = 'center';
		linkRow.style.padding = '8px 0';
		linkRow.style.borderBottom = '1px solid #eee';

		const link = document.createElement('a');
		link.href = item.link || '#';
		link.textContent = item.title;
		link.style.flex = '1';
		link.style.padding = '4px 0';
		link.style.borderBottom = 'none';

		linkRow.appendChild(link);

		if (hasChildren)
		{
			const toggle = document.createElement('span');
			toggle.className = 'toggle-icon';
			toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
			toggle.style.cursor = 'pointer';
			toggle.style.padding = '0 8px';
			toggle.addEventListener('click', function (e)
			{
				e.stopPropagation();
				const sub = container.querySelector('.submenu');
				if (sub)
				{
					sub.classList.toggle('open');
					this.classList.toggle('open');
				}
			});
			linkRow.appendChild(toggle);

			const subContainer = document.createElement('div');
			subContainer.className = 'submenu';
			subContainer.style.paddingLeft = (level + 1) * 16 + 'px';
			item.children.forEach(child =>
			{
				subContainer.appendChild(createMobileMenuItem(child, level + 1));
			});
			container.appendChild(linkRow);
			container.appendChild(subContainer);
		} else
		{
			container.appendChild(linkRow);
		}

		return container;
	}

	// Создание блока контактов для десктопа
	function createContactsHTML(data)
	{
		return `
      <div class="address">
        <svg style="min-width:19px;" width="19" height="23" viewBox="0 0 19 23" fill="none">
          <path d="M0.75 9.30046C0.75 4.57817 4.55558 0.75 9.25 0.75C13.9444 0.75 17.75 4.57817 17.75 9.30046C17.75 13.9857 15.0371 19.453 10.8044 21.4082C9.81765 21.8639 8.68235 21.8639 7.69563 21.4082C3.46291 19.453 0.75 13.9857 0.75 9.30046Z" stroke="#78D864" stroke-width="1.5"/>
          <ellipse cx="9.25" cy="9.15" rx="3.1875" ry="3.15" stroke="#78D864" stroke-width="1.5"/>
        </svg>
        <div><div>Адрес</div><div class="green-text">${ data.address }</div></div>
      </div>
      <div class="support">
        <svg style="min-width:22px;" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11.8611 0.750046C11.8611 0.750046 14.3055 0.972268 17.4166 4.08338C20.5278 7.19449 20.75 9.63894 20.75 9.63894" stroke="#78D864" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12.0911 4.67854C12.0911 4.67854 13.191 4.99281 14.8409 6.64273C16.4908 8.29264 16.8051 9.39259 16.8051 9.39259" stroke="#78D864" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M7.45843 4.43468L8.17956 5.72682C8.83034 6.89292 8.56909 8.42263 7.54412 9.4476C7.54412 9.4476 6.30086 10.6909 8.55502 12.945C10.8091 15.1991 12.0524 13.9559 12.0524 13.9559C13.0774 12.931 14.6071 12.6697 15.7732 13.3205L17.0654 14.0416C18.8262 15.0243 19.0341 17.4936 17.4864 19.0414C16.5564 19.9714 15.4171 20.695 14.1577 20.7428C12.0375 20.8231 8.43698 20.2866 4.82523 16.6748C1.21348 13.0631 0.676905 9.46252 0.75728 7.34236C0.805024 6.08293 1.52867 4.94364 2.45867 4.01364C4.00639 2.46591 6.47575 2.67386 7.45843 4.43468Z" stroke="#78D864" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <div><div>Поддержка 24/7</div><a href="tel:${ data.support }" class="green-text">${ data.support }</a></div>
      </div>
      <div class="work-time">
        <svg style="min-width:22px;" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M10.75 6.30556V10.75L13.5278 13.5278" stroke="#78D864" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.64349 3.6435L3.11316 3.11317V3.11317L3.64349 3.6435ZM2.2364 5.05059L1.48641 5.05436C1.48848 5.46562 1.82136 5.79851 2.23263 5.80058L2.2364 5.05059ZM5.06102 5.81479C5.47523 5.81687 5.8127 5.48278 5.81478 5.06857C5.81686 4.65436 5.48277 4.31689 5.06856 4.31481L5.06479 5.0648L5.06102 5.81479ZM2.97218 2.21843C2.9701 1.80422 2.63263 1.47012 2.21842 1.4722C1.80421 1.47429 1.47012 1.81176 1.4722 2.22596L2.22219 2.2222L2.97218 2.21843ZM1.58589 9.3886C1.64214 8.97822 1.35506 8.59995 0.944688 8.5437C0.534312 8.48745 0.156036 8.77453 0.0997862 9.1849L0.842839 9.28675L1.58589 9.3886ZM17.7854 3.71456L18.3158 3.18423C14.1031 -1.02844 7.29664 -1.07031 3.11316 3.11317L3.64349 3.6435L4.17382 4.17383C7.76148 0.586163 13.6182 0.607931 17.2551 4.24489L17.7854 3.71456ZM3.71455 17.7855L3.18422 18.3158C7.3969 22.5285 14.2034 22.5703 18.3868 18.3868L17.8565 17.8565L17.3262 17.3262C13.7385 20.9139 7.88185 20.8921 4.24488 17.2551L3.71455 17.7855ZM17.8565 17.8565L18.3868 18.3868C22.5703 14.2034 22.5284 7.39691 18.3158 3.18423L17.7854 3.71456L17.2551 4.24489C20.8921 7.88186 20.9138 13.7385 17.3262 17.3262L17.8565 17.8565ZM3.64349 3.6435L3.11316 3.11317L1.70607 4.52026L2.2364 5.05059L2.76673 5.58092L4.17382 4.17383L3.64349 3.6435ZM2.2364 5.05059L2.23263 5.80058L5.06102 5.81479L5.06479 5.0648L5.06856 4.31481L2.24017 4.3006L2.2364 5.05059ZM2.2364 5.05059L2.98639 5.04682L2.97218 2.21843L2.22219 2.2222L1.4722 2.22596L1.48641 5.05436L2.2364 5.05059ZM0.842839 9.28675L0.0997862 9.1849C-0.342835 12.4141 0.687906 15.8195 3.18422 18.3158L3.71455 17.7855L4.24488 17.2551C2.09184 15.1021 1.20473 12.1694 1.58589 9.3886L0.842839 9.28675Z" fill="#78D864"/>
        </svg>
        <div><div>Время работы</div><div class="green-text">${ data.workTime }</div></div>
      </div>
      <div class="email">
		<svg style="min-width:23px;"  width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 9.55C0 5.40164 0 3.32746 1.28873 2.03873C2.57746 0.75 4.65164 0.75 8.8 0.75H13.2C17.3484 0.75 19.4225 0.75 20.7113 2.03873C22 3.32746 22 5.40164 22 9.55C22 13.6984 22 15.7725 20.7113 17.0613C19.4225 18.35 17.3484 18.35 13.2 18.35H8.8C4.65164 18.35 2.57746 18.35 1.28873 17.0613C0 15.7725 0 13.6984 0 9.55Z" stroke="#78D864" stroke-width="1.5"/>
			<path d="M4.39999 5.1499L6.77478 7.12889C8.79508 8.81247 9.80523 9.65427 11 9.65427C12.1948 9.65427 13.2049 8.81247 15.2252 7.12889L17.6 5.1499" stroke="#78D864" stroke-width="1.5" stroke-linecap="round"/>
		</svg>
        <div><div>Электронная почта</div><a href="mailto:${ data.email }" class="green-text">${ data.email }</a></div>
      </div>

	  <div class="soc-icons soc-icons-js">
	  		<a href="#" class="btn-soc">
				<svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.34362 14.8696C1.28121 13.4893 0.75 12.7992 0.75 10.75C0.75 8.70078 1.28121 8.01066 2.34362 6.63041C4.46496 3.87445 8.02264 0.75 13.25 0.75C18.4774 0.75 22.035 3.87445 24.1564 6.63041C25.2188 8.01066 25.75 8.70078 25.75 10.75C25.75 12.7992 25.2188 13.4893 24.1564 14.8696C22.035 17.6256 18.4774 20.75 13.25 20.75C8.02264 20.75 4.46496 17.6256 2.34362 14.8696Z" stroke="#007844" stroke-width="1.5"></path>
				<path d="M17 10.75C17 12.8211 15.3211 14.5 13.25 14.5C11.1789 14.5 9.5 12.8211 9.5 10.75C9.5 8.67893 11.1789 7 13.25 7C15.3211 7 17 8.67893 17 10.75Z" stroke="#007844" stroke-width="1.5"></path>
				</svg>
			</a>
			<a href="#" class="btn-soc">
				<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.2004 14.2545C4.54716 14.2545 0.181886 8.90374 0 0H3.8336C3.95953 6.53512 6.78576 9.30327 9.02436 9.87402V0H12.6341V5.63618C14.8447 5.39361 17.1673 2.82523 17.9508 0H21.5605C21.2653 1.46524 20.6767 2.85259 19.8317 4.07527C18.9867 5.29796 17.9034 6.32966 16.6496 7.10587C18.0492 7.81511 19.2854 8.81898 20.2766 10.0512C21.2678 11.2835 21.9915 12.7161 22.4 14.2545H18.4265C18.0598 12.9183 17.3146 11.7221 16.2842 10.816C15.2538 9.9098 13.984 9.33395 12.6341 9.16058V14.2545H12.2004Z" fill="#007844"></path>
				</svg>
			</a>
			<a href="#" class="btn-soc">
				<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19.6 0.621243L16.4997 16.8068C16.4997 16.8068 16.0659 17.929 14.8742 17.3908L7.72093 11.7111L7.68776 11.6943C8.65401 10.7959 16.1467 3.81959 16.4742 3.50337C16.9811 3.01362 16.6664 2.72206 16.0778 3.09201L5.01016 10.3704L0.740301 8.88268C0.740301 8.88268 0.0683497 8.63517 0.0037063 8.09697C-0.0617876 7.5579 0.762415 7.26634 0.762415 7.26634L18.1693 0.194914C18.1693 0.194914 19.6 -0.45603 19.6 0.621243Z" fill="#007844"></path>
				</svg>
			</a>
			<a href="#" class="btn-soc">
				<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.2376 13.7928C13.7624 13.2681 13.8373 12.5185 13.3876 11.7689C13.0128 11.1692 12.3381 10.8694 11.5885 11.0193C11.2887 11.0942 10.9888 11.2442 10.689 11.469C8.36518 13.0432 5.21682 12.9683 2.89303 11.3941C2.7431 11.3191 2.59318 11.2442 2.44325 11.1692C1.61868 10.7944 0.794122 10.9443 0.344356 11.6939C-0.180371 12.4435 -0.105419 13.2681 0.56923 13.9428C0.719152 14.0927 0.869074 14.1676 0.944035 14.3176L1.019 14.3925C2.06845 15.2171 3.34279 15.7418 4.99194 15.9667L4.01744 16.9412C3.19287 17.7658 2.29334 18.6653 1.46877 19.4899C1.24389 19.7148 0.944035 20.0896 0.944035 20.6143C0.944035 21.2889 1.31885 21.9636 1.9935 22.2634C2.21838 22.4133 2.44326 22.4133 2.66814 22.4133C3.04295 22.4133 3.49271 22.2634 3.79256 21.8886C4.91697 20.7642 5.81651 19.8647 6.71604 18.9651C6.791 18.8902 6.791 18.8902 6.791 18.8902C6.791 18.8902 6.86596 18.8902 6.86596 18.9651C7.46565 19.6398 8.1403 20.2395 8.73999 20.9141C9.03983 21.214 9.33967 21.5138 9.63952 21.8137C10.0143 22.1885 10.3142 22.3384 10.7639 22.3384C11.4386 22.4134 12.1882 21.9636 12.488 21.2889C12.7879 20.6892 12.638 19.9396 12.1132 19.4899C11.3636 18.7403 10.614 17.9157 9.78944 17.1661L8.5151 15.8917C9.18975 15.8168 9.93936 15.6669 10.614 15.367C11.7384 14.9922 12.563 14.4675 13.2376 13.7928Z" fill="#007844"></path>
				<path d="M6.79099 11.6939C10.0143 11.6939 12.638 9.14524 12.638 5.92191C12.638 4.34773 12.0383 2.84852 10.9138 1.72411C9.78943 0.59969 8.36518 0 6.86596 0C3.64264 0 1.09396 2.62363 1.019 5.77199C1.019 7.34618 1.61869 8.77043 2.7431 9.89485C3.79256 11.0942 5.21681 11.6939 6.79099 11.6939ZM5.14185 4.19782C5.59162 3.74805 6.19131 3.52316 6.79099 3.52316C8.14029 3.52316 9.11479 4.57262 9.11479 5.84696C9.11479 7.19626 8.06533 8.17074 6.79099 8.17074C5.4417 8.17074 4.46721 7.1213 4.46721 5.84696C4.46721 5.24727 4.69209 4.64759 5.14185 4.19782Z" fill="#007844"></path>
				</svg>
			</a>
		</div>
    `;
	}

	// -------- МОНТАЖ ----------
	document.addEventListener('DOMContentLoaded', function ()
	{
		const desktopNav = document.getElementById('desktopNav');
		const mobileNav = document.getElementById('mobileNav');
		const desktopContacts = document.getElementById('desktopContacts');
		const desktopSocial = document.getElementById('desktopSocial');




		// 1. Десктопное меню
		menuData.forEach(item =>
		{
			const node = createDesktopMenuItem(item);
			desktopNav.appendChild(node);
		});

		// 2. Мобильное меню (навигация + контакты)
		menuData.forEach(item =>
		{
			const node = createMobileMenuItem(item);
			mobileNav.appendChild(node);
		});

		// добавляеи обертку span c точкой для пункта 'Услуги'
		const servicesLink = Array.from(desktopNav.querySelectorAll('a')).find((link) =>
			link.textContent.replace(/\s+/g, ' ').trim() === 'Услуги'
		);

		if (!servicesLink) return;

		const textNode = Array.from(servicesLink.childNodes).find(
			(node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() === 'Услуги'
		);

		if (!textNode) return;

		const span = document.createElement('span');
		span.textContent = 'Услуги';

		servicesLink.replaceChild(span, textNode);

		// 2.2 контакты (мобильные)
		const contactsBlock = document.createElement('div');
		contactsBlock.className = 'mobile-contacts';
		contactsBlock.innerHTML = createContactsHTML(contactsData);
		mobileNav.appendChild(contactsBlock);

		// 3. Десктопные контакты
		desktopContacts.innerHTML = createContactsHTML(contactsData);

		// 4. Десктопные соцсети
		socialData.forEach(soc =>
		{
			const link = document.createElement('a');
			link.href = '#';
			link.className = 'btn-soc';
			link.innerHTML = soc.svg;
			desktopSocial.appendChild(link);
		});

		// ---------- УПРАВЛЕНИЕ МОБИЛЬНЫМ МЕНЮ ----------
		const hamburger = document.getElementById('hamburger');
		const mobileNavEl = document.getElementById('mobileNav');

		hamburger.addEventListener('click', function (e)
		{
			e.stopPropagation();
			mobileNavEl.classList.toggle('active');
			this.querySelector('i').classList.toggle('fa-bars');
			this.querySelector('i').classList.toggle('fa-times');
		});

		document.addEventListener('click', function (e)
		{
			const target = e.target;
			if (!target.closest('.header'))
			{
				mobileNavEl.classList.remove('active');
				const icon = hamburger.querySelector('i');
				if (icon)
				{
					icon.classList.remove('fa-times');
					icon.classList.add('fa-bars');
				}
			}
		});

		mobileNavEl.addEventListener('click', function (e)
		{
			const link = e.target.closest('a');
			if (link && !e.target.closest('.toggle-icon'))
			{
				mobileNavEl.classList.remove('active');
				const icon = hamburger.querySelector('i');
				if (icon)
				{
					icon.classList.remove('fa-times');
					icon.classList.add('fa-bars');
				}
			}
		});


		// ---------- СЛАЙДЕР ----------
		const sliderData = [
			{
				img: 'images/license.png',
				alt: 'Лицензия 1',
				text: 'Принято, граждане, наблюдать, как многие известные личности своевременно верифицированы'
			},
			{
				img: 'images/license.png',
				alt: 'Лицензия 2',
				text: 'Принято, граждане, наблюдать, как многие известные личности своевременно верифицированы'
			},
			{
				img: 'images/license.png',
				alt: 'Лицензия 3',
				text: 'Принято, граждане, наблюдать, как многие известные личности своевременно верифицированы'
			},
			{
				img: 'images/license.png',
				alt: 'Лицензия 4',
				text: 'Принято, граждане, наблюдать, как многие известные личности своевременно верифицированы'
			},
			{
				img: 'images/license.png',
				alt: 'Лицензия 5',
				text: 'Принято, граждане, наблюдать, как многие известные личности своевременно верифицированы'
			},
			{
				img: 'images/license.png',
				alt: 'Лицензия 6',
				text: 'Принято, граждане, наблюдать, как многие известные личности своевременно верифицированы'
			}
		];

		const track = document.getElementById('sliderTrack');
		const prev = document.getElementById('prevBtn');
		const next = document.getElementById('nextBtn');
		const dotsContainer = document.getElementById('sliderDots');

		let current = 0;
		let slidesPerView = getSlidesPerView();
		let groups = [];

		function getSlidesPerView()
		{
			return window.matchMedia('(max-width: 640px)').matches ? 1 : 3;
		}

		function buildGroups()
		{
			slidesPerView = getSlidesPerView();
			groups = [];

			for (let i = 0; i < sliderData.length; i += slidesPerView)
			{
				groups.push(sliderData.slice(i, i + slidesPerView));
			}

			track.innerHTML = groups
				.map(group => `
        <div class="slide-group" style="grid-template-columns: repeat(${ group.length }, 1fr);">
          ${ group
						.map(
							item => `
                <div class="license-card">
                  <img class="js-license-img" src="${ item.img }" alt="${ item.alt }">
                  <p>${ item.text }</p>
                </div>
              `
						)
						.join('') }
        </div>
      `)
				.join('');

			current = Math.min(current, groups.length - 1);
			// createDots();
			updateSlide(current, false);
		}

		function updateSlide(index, animate = true)
		{
			if (!animate)
			{
				track.style.transition = 'none';
			} else
			{
				track.style.transition = 'transform 0.45s ease';
			}

			track.style.transform = `translateX(-${ index * 100 }%)`;

			document.querySelectorAll('.dot').forEach((dot, i) =>
			{
				dot.classList.toggle('active', i === index);
			});

			if (!animate)
			{
				requestAnimationFrame(() =>
				{
					track.style.transition = 'transform 0.45s ease';
				});
			}
		}

		// function createDots()
		// {
		// 	dotsContainer.innerHTML = '';
		// 	for (let i = 0; i < groups.length; i++)
		// 	{
		// 		const dot = document.createElement('button');
		// 		dot.type = 'button';
		// 		dot.className = 'dot' + (i === 0 ? ' active' : '');
		// 		dot.setAttribute('aria-label', `Перейти к слайду ${ i + 1 }`);
		// 		dot.addEventListener('click', () =>
		// 		{
		// 			current = i;
		// 			updateSlide(current);
		// 		});
		// 		dotsContainer.appendChild(dot);
		// 	}
		// }

		prev.addEventListener('click', () =>
		{
			current = (current - 1 + groups.length) % groups.length;
			updateSlide(current);
		});

		next.addEventListener('click', () =>
		{
			current = (current + 1) % groups.length;
			updateSlide(current);
		});

		window.addEventListener('resize', () =>
		{
			const newSlidesPerView = getSlidesPerView();
			if (newSlidesPerView !== slidesPerView)
			{
				buildGroups();
			}
		});

		buildGroups();

		const modal = document.getElementById('licenseModal');
		const modalImg = document.getElementById('licenseModalImg');
		const modalClose = document.getElementById('licenseModalClose');

		function openLicenseModal(src, alt)
		{
			modalImg.src = src;
			modalImg.alt = alt || 'Лицензия';
			modal.classList.add('active');
			modal.setAttribute('aria-hidden', 'false');
			document.body.style.overflow = 'hidden';
		}

		function closeLicenseModal()
		{
			modal.classList.remove('active');
			modal.setAttribute('aria-hidden', 'true');
			modalImg.src = '';
			document.body.style.overflow = '';
		}

		document.addEventListener('click', (e) =>
		{
			const img = e.target.closest('.js-license-img');
			if (img)
			{
				openLicenseModal(img.src, img.alt);
			}

			if (e.target === modal || e.target === modalClose)
			{
				closeLicenseModal();
			}
		});

		document.addEventListener('keydown', (e) =>
		{
			if (e.key === 'Escape' && modal.classList.contains('active'))
			{
				closeLicenseModal();
			}
		});

		// ---------- АККОРДЕОН ----------
		const accordionItems = document.querySelectorAll('[data-accordion]');

		accordionItems.forEach((item) =>
		{
			const header = item.querySelector('.accordion-header');
			const body = item.querySelector('.accordion-body');
			const icon = item.querySelector('.accordion-icon i');
			const isExpanded = header.getAttribute('aria-expanded') === 'true';

			body.hidden = !isExpanded;
			item.classList.toggle('accordion-active', isExpanded);

			if (icon)
			{
				icon.classList.toggle('fa-plus', !isExpanded);
				icon.classList.toggle('fa-minus', isExpanded);
			}

			header.addEventListener('click', () =>
			{
				const isExpanded = header.getAttribute('aria-expanded') === 'true';

				accordionItems.forEach((otherItem) =>
				{
					const otherHeader = otherItem.querySelector('.accordion-header');
					const otherBody = otherItem.querySelector('.accordion-body');
					const otherIcon = otherItem.querySelector('.accordion-icon i');

					if (otherHeader !== header)
					{
						otherHeader.setAttribute('aria-expanded', 'false');
						otherBody.hidden = true;
						otherItem.classList.remove('accordion-active');

						if (otherIcon)
						{
							otherIcon.classList.remove('fa-minus');
							otherIcon.classList.add('fa-plus');
						}
					}
				});

				const nextExpanded = !isExpanded;
				header.setAttribute('aria-expanded', String(nextExpanded));
				body.hidden = !nextExpanded;
				item.classList.toggle('accordion-active', nextExpanded);

				if (icon)
				{
					icon.classList.toggle('fa-plus', !nextExpanded);
					icon.classList.toggle('fa-minus', nextExpanded);
				}
			});
		});



		// ---------- МОДАЛКА ----------
		const overlay = document.getElementById('modalOverlay');
		const openBtn = document.getElementById('openModalBtn');
		const closeBtns = document.querySelectorAll('#closeModalBtn, #closeModalBtn2');

		function openModal() { overlay.classList.add('active'); }
		function closeModal() { overlay.classList.remove('active'); }

		openBtn.addEventListener('click', openModal);
		closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
		overlay.addEventListener('click', function (e)
		{
			if (e.target === this) closeModal();
		});
	});

})();
