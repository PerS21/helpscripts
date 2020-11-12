const script = function() {
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);
    const xx = (min, max) => `0${random(min, max)}`.substr(-2);

    const names = 'Алена Светлана Марфа Просковья'.split(' ');
    const surnameList = ('Соколова Иванова Новикова Морозова Лебедева Егорова Козлова Павлова ' + 'Никитина Макарова Захарова Сорокина Ковалева Жукова Баранова Комарова Филиппова Давыдова ' + 'Голубева Журавлева Потапова Овчинникова').split(' ');
    const patronymicList = ('Борисовна Ивановна Владимировна Дмитриевна Егоровна Ефимовна Епифановна ' + 'Игоревна Леонидовна Назаровна Олеговна Павловна Степановна Тихоновна Тимофеевна Ульяновна').split(' ');

    const getRandomName = () => names[random(0, names.length - 1)];
    const getRandomSurname = () => surnameList[random(0, surnameList.length - 1)];
    const getRandomPatronymic = () => patronymicList[random(0, patronymicList.length - 1)];

    const getRandomDate = (yearFrom = 1963, yearTo = 1970) => `${xx(1, 29)}.${xx(1, 12)}.${random(yearFrom, yearTo)}`;
    const getRandomPhone = () => `+7${random(900, 999)}${random(1000001, 9999999)}`;
    const getRandomSum = () => `${random(1000000, 99999999)}.${random(1, 99)}`;

    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => {
        const mapping = {
            'proof.proofContractNumber': () =>  `${random(1000000000, 9999999999)}`,
            'proof.proofContractDate?': () => getRandomDate(2010, 2015),
            'proof.registrationDateStr': () => getRandomDate(2010, 2015),
            'proof.registrationNumber': () => `${random(1000000000, 9999999999)}`,
            'proof.proofContractDateStr': () => `10102020`,


            'unknown.x8': getRandomSum,
            'unknown.x9': getRandomSum,
            'unknown.x10': getRandomSum,
            'objects[0].cadastralNumber': () => '11:22:333333:44',
            'objects[0].fullArea': () => `${random(13, 150)}`,
            'objects[0].apartment.roomNum': () => `${random(1, 5)}`,
            'objects[0].address': () => 'г. Москва, ул. Тверская, 8А, кв. 108',

            'buyers.[0].person.name.surname': getRandomSurname,
            'buyers.[0].person.name.name': getRandomName,
            'buyers.[0].person.name.patronymic': getRandomPatronymic,
            'buyers.[0].person.birthDateStr': getRandomDate,
            'buyers.[0].person.placeOfBirth': () => 'г. Москва',
            'buyers.[0].person.inn': () => `117617177440`,
            'buyers.[0].person.snils': () => `72801461681`,
            'buyers.[0].person.identity.series': () => `${random(1000, 9999)}`,
            'buyers.[0].person.identity.number': () => `${random(100000, 999999)}`,
            'buyers.[0].person.identity.authority': () => 'Отделом УФМС России по г. Москва',
            'buyers.[0].person.identity.dateOfIssueStr': () => getRandomDate(2010, 2015),
            'buyers.[0].person.identity.departmentCode': () => `${random(100000, 999999)}`,
            'buyers.[0].person.identity.registrationAddress': () => 'г. Москва, Ленинградский проспект, 33А',
            'buyers.[0].person.contactData.email': () => 'linnikao@m2.ru',
            'buyers.[0].person.contactData.phone': getRandomPhone,

            'sellers.[0].person.name.surname': getRandomSurname,
            'sellers.[0].person.name.name': getRandomName,
            'sellers.[0].person.name.patronymic': getRandomPatronymic,
            'sellers.[0].person.birthDateStr': getRandomDate,
            'sellers.[0].person.placeOfBirth': () => 'г. Владивосток',
            'sellers.[0].person.inn': () => `117617177440`,
            'sellers.[0].person.snils': () => `72801461681`,
            'sellers.[0].person.identity.series': () => `${random(1000, 9999)}`,
            'sellers.[0].person.identity.number': () => `${random(100000, 999999)}`,
            'sellers.[0].person.identity.authority': () => 'Отделом УФМС России по г. Владивосток',
            'sellers.[0].person.identity.dateOfIssueStr': () => getRandomDate(2010, 2015),
            'sellers.[0].person.identity.departmentCode': () => `${random(100000, 999999)}`,
            'sellers.[0].person.identity.registrationAddress': () => 'г Москва, пр-кт Андропова, д 1, кв 2',
            'sellers.[0].person.contactData.email': () => 'random@m2.ru',
            'sellers.[0].person.contactData.phone': getRandomPhone,
        };
        const fieldName = input.getAttribute('name');
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
}

export default {
    label:"DKP",
    image:"padlock.png",
    test: [
        '/secure-payment-service/deals/.*'
    ],
    script: String(script)
}
