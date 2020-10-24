javascript:
    (() => {
        const random = (min, max) => Math.round(Math.random() * (max - min) + min);
        const xx = (min, max) => `0${random(min, max)}`.substr(-2);
        const names = 'Алена Светлана Марфа Просковья'.split(' ');
        const name = names[random(0, names.length - 1)];
        const surnameList = ('Соколова Иванова Новикова Морозова Лебедева Егорова Козлова Павлова ' + 'Никитина Макарова Захарова Сорокина Ковалева Жукова Баранова Комарова Филиппова Давыдова ' + 'Голубева Журавлева Потапова Овчинникова').split(' ');
        const surname = surnameList[random(0, (surnameList.length - 1))];
        const patronymicList = ('Борисовна Ивановна Владимировна Дмитриевна Егоровна Ефимовна Епифановна ' + 'Игоревна Леонидовна Назаровна Олеговна Павловна Степановна Тихоновна Тимофеевна Ульяновна').split(' ');
        const patronymic = patronymicList[random(0, (patronymicList.length - 1))];
        const letterOfAttorneyNames = 'Алены Светланы Марфы Просковьи'.split(' ');
        const letterOfAttorneyName = letterOfAttorneyNames[random(0, names.length - 1)];
        const letterOfAttorneySurnameList = ('Соколовой Ивановой Новиковой Морозовой Лебедевой Егоровой Козловой Павловой ' + 'Никитиной Макаровой Захаровой Сорокиной Ковалевой Жуковой Барановой Комаровой Филипповой Давыдовой ' + 'Голубевой Журавлевой Потаповой Овчинниковой').split(' ');
        const letterOfAttorneySurname = letterOfAttorneySurnameList[random(0, (surnameList.length - 1))];
        const letterOfAttorneyPatronymicList = ('Борисовны Ивановны Владимировны Дмитриевны Егоровны Ефимовны Епифановны ' + 'Игоревны Леонидовны Назаровны Олеговны Павловноы Степановны Тихоновны Тимофеевны Ульяновны').split(' ');
        const letterOfAttorneyPatronymic = letterOfAttorneyPatronymicList[random(0, (patronymicList.length - 1))];
        const inputs = Array.from(document.querySelectorAll('input'));
        inputs.forEach(input => {
            const mapping = {
                "realtyObjects[0].cadastralNumber":() => '11:22:333333:44',
                "buyer.person.passport.name.secondName": () => "Тестовый",
                "buyer.person.passport.name.firstName": () => "Тест",
                'buyer.person.passport.name.patronymic': () => "Тестович",
                'buyer.person.passport.birthDate': () => `${xx(1, 29)}.${xx(1, 12)}.${random(1963, 1964)}`,
                'buyer.person.passport.seriesNumber': () => `${random(1000, 9999)}${random(100000, 999999)}`,
                'buyer.person.passport.issuedBy': () => `Отделом УФМС России по г. Москва`,
                'buyer.person.passport.issuedDate': () => `${xx(1, 29)}.${xx(1, 12)}.${random(2010, 2015)}`,
                'buyer.person.passport.unitCode': () => `${random(1000, 9999)}${random(100000, 999999)}`,
                'buyer.person.passport.birthPlace': () => 'г. Москва',
                'buyer.person.passport.registrationAddress': () => 'г. Москва, Ленинградский проспект, 33А',
                'buyer.person.inn': () => `${random(100000000000, 999999999999)}`,
                'buyer.person.email': () => 'perepelkinsr@vtblife.ru',
                'buyer.person.phone': () => `+7${random(900, 999)}${random(1000001, 9999999)}`,
                'seller.company.name': () => "Тест",
                'seller.company.legalAddress': () => "Адрес продавца",
                'seller.company.inn': () => `${random(1000000000, 9999999999)}`,
                'seller.company.kpp': () => `${random(100000000, 999999999)}`,
                'seller.company.ogrn': () => `${random(1000000000000, 9999999999999)}`,
                'seller.bankInfo.bankName': () => "Банк продавец",
                'seller.bankInfo.paymentNumber': () => `40702810800160001138`,
                'seller.bankInfo.correspondingNumber': () => `${random(10000000000000000000, 99999999999999999999)}`,
                'seller.bankInfo.bik': () => `044525187`,

                "seller.person.passport.name.secondName": () => "Тестовый",
                "seller.person.passport.name.firstName": () => "Тест",
                'seller.person.passport.name.patronymic': () => "Тестович",
                'seller.person.passport.birthDate': () => `${xx(1, 29)}.${xx(1, 12)}.${random(1963, 1964)}`,
                'seller.person.passport.seriesNumber': () => `${random(1000, 9999)}${random(100000, 999999)}`,
                'seller.person.passport.issuedBy': () => `Отделом УФМС России по г. Москва`,
                'seller.person.passport.issuedDate': () => `${xx(1, 29)}.${xx(1, 12)}.${random(2010, 2015)}`,
                'seller.person.passport.unitCode': () => `${random(1000, 9999)}${random(100000, 999999)}`,
                'seller.person.passport.birthPlace': () => 'г. Москва',
                'seller.person.passport.registrationAddress': () => 'г. Москва, Ленинградский проспект, 33А',
                'seller.person.inn': () => `${random(100000000000, 999999999999)}`,
                'seller.person.email': () => 'perepelkinsr@vtblife.ru',
                'seller.person.phone': () => `+7${random(900, 999)}${random(1000001, 9999999)}`,

                'acquisitionContract.amount': () => `${random(100000, 9999999999)}.${random(1, 99)}`,
                'acquisitionContract.number': () => `${random(100000, 9999999999)}`,
                'acquisitionContract.date': () => `${xx(1, 29)}.${xx(1, 12)}.${random(2010, 2015)}`,
                'sbrContract.person.secondName': () => letterOfAttorneySurname,
                'sbrContract.person.firstName': () => letterOfAttorneyName,
                'sbrContract.person.patronymic': () => letterOfAttorneyPatronymic,
                'sbrContract.number': () => `${random(1000001, 9999999)}`,
                'sbrContract.date': () => `${xx(1, 29)}.${xx(1, 12)}.${random(2010, 2015)}`,
            };
            const fieldName = input.getAttribute("name");
            if (mapping[fieldName]) {
                type(input, mapping[fieldName]());
            }
        });
        function type(input, value) {
            const lastValue = input.value;
            input.value = value;
            const event = new Event('input', { bubbles: true });
            event.simulated = true;
            const tracker = input._valueTracker;
            if (tracker) {
                tracker.setValue(lastValue);
            }
            input.dispatchEvent(event);
        }
    })();